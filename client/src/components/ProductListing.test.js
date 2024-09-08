import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import ProductListing from "./ProductListing";

const mockProducts = [
  {
    id: 1,
    title: "Amazon Kindle E-reader",
    quantity: 5,
    price: 79.99,
  }
];


test("contains h2 heading", () => {
  render(<ProductListing products={mockProducts} />);
  const heading = screen.getByRole("heading", { level: 2 });
  expect(heading).toBeInTheDocument();
});
