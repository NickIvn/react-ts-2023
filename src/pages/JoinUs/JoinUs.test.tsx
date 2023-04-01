import { render, screen } from "@testing-library/react";
import JoinUs from "./JoinUs";

describe("renders learn react link", () => {
  test("render App", () => {
    render(<JoinUs />);
    expect(screen.getByText(/Please/i)).toBeInTheDocument();
  });
});
