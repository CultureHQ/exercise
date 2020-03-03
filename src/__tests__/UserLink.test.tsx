import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

import { mockUser } from "./testMocks";
import UserLink from "../UserLink";

test("renders a link to a user", () => {
  const user = mockUser();
  const { queryByText } = render(
    <Router>
      <UserLink user={user} />
    </Router>
  );

  expect(queryByText(user.name)).toBeTruthy();
});
