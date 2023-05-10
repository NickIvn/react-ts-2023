import { render, screen } from "@testing-library/react";
import About from "./About";

describe("renders learn react link", () => {
  test("render App", () => {
    render(<About />);
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
