import { render, screen } from "@testing-library/react";
import { JoinUs } from "./JoinUs";

describe("renders learn react link", () => {
  test("render App", () => {
    const page = { title: "About page", callback: () => {} };
    render(<JoinUs {...page} />);
    expect(screen.getByText(/Please/i)).toBeInTheDocument();
  });
});
