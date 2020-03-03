import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, wait } from "@testing-library/react";

import { mockEvent } from "./testMocks";
import Events from "../Events";

jest.mock("../makeGet", () => {
  const makeGet = <T extends any>(path: string): Promise<T> => {
    if (path !== "/events") {
      throw new Error();
    }

    const events = [
      mockEvent({ id: 1, name: "One" }),
      mockEvent({ id: 2, name: "Two" }),
      mockEvent({ id: 3, name: "Three" }),
    ];

    return Promise.resolve({ events });
  };

  return makeGet;
});

test("renders the list of events", async () => {
  const { queryByText } = render(
    <Router>
      <Events />
    </Router>
  );

  await wait();

  expect(queryByText("One")).toBeTruthy();
  expect(queryByText("Two")).toBeTruthy();
  expect(queryByText("Three")).toBeTruthy();
});
