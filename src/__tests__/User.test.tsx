import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, wait } from "@testing-library/react";

import { mockUser, mockRsvp, mockEvent } from "./testMocks";
import { UserWithParam } from "../User";

jest.mock("../makeGet", () => (path: string) => {
  if (path !== "/users/1") {
    throw new Error();
  }

  return Promise.resolve({
    user: {
      ...mockUser(),
      rsvps: [
        { ...mockRsvp({ id: 1 }), event: mockEvent({ name: "One" }) },
        { ...mockRsvp({ id: 2 }), event: mockEvent({ name: "Two" }) },
        { ...mockRsvp({ id: 3 }), event: mockEvent({ name: "Three" }) }
      ]
    }
  });
});

test("renders the user", async () => {
  const { queryByText } = render(
    <Router>
      <UserWithParam userId="1" />
    </Router>
  );

  await wait();

  expect(queryByText("One")).toBeTruthy();
  expect(queryByText("Two")).toBeTruthy();
  expect(queryByText("Three")).toBeTruthy();
});
