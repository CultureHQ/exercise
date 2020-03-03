import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import { mockEvent } from "./testMocks";
import EventLink from "../EventLink";

test("renders a link to a event", () => {
  const event = mockEvent();
  const { queryByText } = render(
    <Router>
      <EventLink event={event} />
    </Router>
  );

  expect(queryByText(event.name)).toBeTruthy();
});
