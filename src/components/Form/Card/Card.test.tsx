import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Card", () => {
  it("renders Card component with correct data", () => {
    const member = {
      id: 1,
      name: "Name",
      surname: "Surname",
      date: "2023-03-26",
      gender: "Mock Gender",
      category: "Mock Category",
      imageUrl: "https://example.com/mock-image.jpg",
      rules: true,
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={<Card member={member} onRemove={() => {}} />}
            />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { name: /Name/ })).toBeInTheDocument();
    expect(screen.getByAltText(member.name)).toHaveAttribute(
      "src",
      member.imageUrl
    );
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
});
