import React from "react";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Home from "../../pages/Home/Home";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";

describe("Cards", () => {
  it("show cards after render", async () => {
    await act(async () => {
      render(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <Routes>
              <Route path="/" element={<Home />}></Route>
            </Routes>
          </MemoryRouter>
        </Provider>
      );
    });
    let someCard = screen.queryByText("Breaking Bad");
    expect(someCard).toBe(null);
    someCard = await screen.findByText("Breaking Bad");
    expect(someCard).toBeInTheDocument();
  });
});
