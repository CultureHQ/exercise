import React from "react";
import { render } from "@testing-library/react";

import NotFound from "../NotFound";

test("renders", () => {
  const { queryByText } = render(<NotFound />);

  expect(queryByText(/Not Found/)).toBeTruthy();
});
