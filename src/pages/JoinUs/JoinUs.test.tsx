import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store/store";
import JoinUs from "./JoinUs";

describe("JoinUs", () => {
  it("renders join us form", () => {
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <JoinUs />
        </BrowserRouter>
      </Provider>
    );
    const joinUsForm = getByText(/Please/i);
    expect(joinUsForm).toBeInTheDocument();
  });
});
