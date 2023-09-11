import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";

import { mockEvent, mockRsvp, mockUser } from "./testMocks";
import { EventWithParam } from "../Event";

jest.mock("../makeGet", () => (path: string) => {
  if (path !== "/events/1") {
    throw new Error();
  }

  return Promise.resolve({
    event: {
      ...mockEvent(),
      rsvps: [
        { ...mockRsvp({ id: 1 }), user: mockUser({ name: "One" }) },
        { ...mockRsvp({ id: 2 }), user: mockUser({ name: "Two" }) },
        { ...mockRsvp({ id: 3 }), user: mockUser({ name: "Three" }) }
      ]
    }
  });
});

test("renders the event", async () => {
  const { queryByText } = render(
    <Router>
      <EventWithParam eventId="1" />
    </Router>
  );

  await waitFor(() => {});

  expect(queryByText("One")).toBeTruthy();
  expect(queryByText("Two")).toBeTruthy();
  expect(queryByText("Three")).toBeTruthy();
});
