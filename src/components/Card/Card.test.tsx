import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Card", () => {
  it("renders Card component with correct data", () => {
    const movie = {
      id: 1,
      name: "Terminator",
      poster_path: "/image",
      vote_average: 8.8,
      origin_country: "US",
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Provider store={store}>
          <Routes>
            <Route
              path="/"
              element={<Card movie={movie} onClick={() => {}} />}
            />
          </Routes>
        </Provider>
      </MemoryRouter>
    );
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByAltText(movie.name)).toHaveAttribute(
      "src",
      `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
    );
    expect(screen.getByTestId("post")).toBeInTheDocument();
  });
});
