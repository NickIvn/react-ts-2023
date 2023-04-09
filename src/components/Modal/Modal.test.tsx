import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("Modal", () => {
  it("renders Modal component with correct data", () => {
    const movie = {
      id: 1,
      name: "Terminator",
      overview: "Some some long text",
      poster_path: "/image",
      vote_average: 8.8,
      origin_country: "US",
    };
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path="/"
            element={<Modal movie={movie} onClose={() => {}} />}
          />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText(movie.name)).toBeInTheDocument();
    expect(screen.getByText(movie.overview)).toBeInTheDocument();
    expect(screen.getByAltText(movie.name)).toHaveAttribute(
      "src",
      `https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`
    );
  });
});
