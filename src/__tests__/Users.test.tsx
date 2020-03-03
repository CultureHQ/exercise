import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, wait } from "@testing-library/react";

import { mockUser } from "./testMocks";
import Users from "../Users";

jest.mock("../makeGet", () => {
  const makeGet = <T extends any>(path: string): Promise<T> => {
    if (path !== "/users") {
      throw new Error();
    }

    const users = [
      mockUser({ id: 1, name: "One" }),
      mockUser({ id: 2, name: "Two" }),
      mockUser({ id: 3, name: "Three" })
    ];

    return Promise.resolve({ users });
  };

  return makeGet;
});

test("renders the list of users", async () => {
  const { queryByText } = render(
    <Router>
      <Users />
    </Router>
  );

  await wait();

  expect(queryByText("One")).toBeTruthy();
  expect(queryByText("Two")).toBeTruthy();
  expect(queryByText("Three")).toBeTruthy();
});
