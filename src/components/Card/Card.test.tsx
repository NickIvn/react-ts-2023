import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

const data = {
  id: 1,
  title: "Card 1",
  description: "Here is the card's 1 description",
  imageUrl: "https://picsum.photos/300/300?random=1",
};

describe("renders learn react link", () => {
  it("render list", () => {
    render(<Card {...data} />);
    expect(screen.getByText(data.title)).toBeInTheDocument();
    expect(screen.getByAltText(data.title)).toBeInTheDocument();
    expect(screen.getAllByTestId("post").length).toEqual(1);
  });
});
