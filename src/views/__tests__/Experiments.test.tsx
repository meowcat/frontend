import React from "react";
import { render, screen } from "@testing-library/react";

import Experiments from "../Experiments";

it("Search for columns", () => {
  render(<Experiments />);
  const columns = [
    "Identifier",
    "Owners",
    "Tags",
    "Title",
    "Description",
    "Creation date",
    "Last modification date",
    "Status",
  ];
  for (const column of columns) {
    expect(screen.getByText(column)).toBeInTheDocument();
  }
});
