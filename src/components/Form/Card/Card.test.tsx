import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

const member = {
  id: 1,
  name: "Mock Name",
  surname: "Mock Surname",
  date: "2023-03-26",
  gender: "Mock Gender",
  category: "Mock Category",
  imageUrl: "https://example.com/mock-image.jpg",
  rules: true,
};

describe("Card", () => {
  it("renders member data correctly", () => {
    render(<Card member={member} />);
    expect(screen.getByText("Mock Name")).toBeInTheDocument();
    expect(screen.getByText("Mock Surname")).toBeInTheDocument();
    expect(screen.getByText("DoB: 2023-03-26")).toBeInTheDocument();
    expect(screen.getByText("gender:")).toHaveTextContent(
      "gender: Mock Gender"
    );
    expect(screen.getByText("category:")).toHaveTextContent(
      "category: Mock Category"
    );
    expect(screen.getByAltText("Mock Name")).toHaveAttribute(
      "src",
      "https://example.com/mock-image.jpg"
    );
  });
});
