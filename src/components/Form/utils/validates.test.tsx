import {
  validateName,
  validateSurname,
  validateImageUrl,
  validateDate,
  validateCategory,
  validateGender,
} from "./validates";

describe("validateName", () => {
  it("returns true if the name is valid", () => {
    const validName = "Name";
    expect(validateName(validName)).toBe(true);
  });

  it("returns false if the name is invalid", () => {
    const invalidName = "name";
    expect(validateName(invalidName)).toBe(false);
  });
});

describe("validateSurname", () => {
  it("returns true if the surname is valid", () => {
    const validSurname = "Surname";
    expect(validateSurname(validSurname)).toBe(true);
  });

  it("returns false if the surname is invalid", () => {
    const invalidSurname = "surname";
    expect(validateSurname(invalidSurname)).toBe(false);
  });
});

describe("validateImageUrl", () => {
  it("returns true if the image URL is not empty", () => {
    const validImageUrl = "https://example.com/image.jpg";
    expect(validateImageUrl(validImageUrl)).toBe(true);
  });

  it("returns false if the image URL is empty", () => {
    const emptyImageUrl = "";
    expect(validateImageUrl(emptyImageUrl)).toBe(false);
  });
});

describe("validateDate", () => {
  it("returns true if the date is valid", () => {
    const validDate = "2020-03-30";
    expect(validateDate(validDate)).toBe(true);
  });

  it("returns false if the date is in the past", () => {
    const invalidPastDate = "2023-04-01";
    expect(validateDate(invalidPastDate)).toBe(false);
  });

  it("returns false if the date is too far in the future", () => {
    const invalidFutureDate = "2040-01-01";
    expect(validateDate(invalidFutureDate)).toBe(false);
  });
});

describe("validateCategory", () => {
  it("returns true if the category is not empty", () => {
    const validCategory = "Valid Category";
    expect(validateCategory(validCategory)).toBe(true);
  });

  it("returns false if the category is empty", () => {
    const emptyCategory = "";
    expect(validateCategory(emptyCategory)).toBe(false);
  });
});

describe("validateGender", () => {
  it("returns true if the gender is valid", () => {
    const validgender = "Valid gender";
    expect(validateGender(validgender)).toBe(true);
  });

  it("returns false if the gender is too short", () => {
    const shortgender = "AB";
    expect(validateGender(shortgender)).toBe(false);
  });

  it("returns false if the gender is empty", () => {
    const emptygender = "";
    expect(validateGender(emptygender)).toBe(false);
  });
});
