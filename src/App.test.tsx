// import React from "react";
// import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store";

// describe("renders learn react link", () => {
//   test("render App", () => {
describe("App component", () => {
  it("should render without errors", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    // expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});
