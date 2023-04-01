import { render, screen } from "@testing-library/react";
import Cards from "./Cards";

describe("renders learn react link", () => {
  it("render list", () => {
    render(<Cards />);
    expect(screen.getAllByTestId("post").length).toEqual(8);
  });
});
