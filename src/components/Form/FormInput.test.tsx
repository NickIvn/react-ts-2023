import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import FormInput from "./FormInput";

describe("FormInput", () => {
  it("should render the form correctly", () => {
    const form = render(<FormInput onAddCard={vi.fn()} />);

    expect(screen.getByText("Name:")).toBeInTheDocument();
    expect(screen.getByText("Surname:")).toBeInTheDocument();
    expect(screen.getByText("Date Of Birth:")).toBeInTheDocument();
    expect(screen.getByText("Gender:")).toBeInTheDocument();
    expect(screen.getByText("Category:")).toBeInTheDocument();
    expect(screen.getByText("Image:")).toBeInTheDocument();
    expect(screen.getByText("I accept the rules.")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add new member" })
    ).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("Name:"), {
      target: { value: "Test Name" },
    });
    fireEvent.change(screen.getByLabelText("Date Of Birth:"), {
      target: { value: "1990-01-01" },
    });

    expect(form).toBeTruthy();
    expect(form).toBeDefined();
  });
});
