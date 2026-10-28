
import { describe, it, expect } from "vitest";
import { validateSignup } from "./validateSignup";
import type { SignupValues } from "./validateSignup";

const validValues: SignupValues = {
  fullName: "Aliya Nurlanova",
  email: "aliya@example.com",
  tickets: "2",
};

describe("validateSignup", () => {
  it("returns no errors for valid values", () => {
    expect(validateSignup(validValues, 10)).toEqual({});
  });

  it("rejects tickets equal to 0", () => {
    expect(
      validateSignup({ ...validValues, tickets: "0" }, 10)
    ).toEqual({ tickets: "Choose 1 to 4 tickets" });
  });

  it("rejects more than 4 tickets", () => {
    expect(
      validateSignup({ ...validValues, tickets: "5" }, 10)
    ).toEqual({ tickets: "Choose 1 to 4 tickets" });
  });

  it("rejects fractional tickets", () => {
    expect(
      validateSignup({ ...validValues, tickets: "1.5" }, 10)
    ).toEqual({ tickets: "Choose 1 to 4 tickets" });
  });

  it("accepts 4 tickets when enough seats are available", () => {
    expect(
      validateSignup({ ...validValues, tickets: "4" }, 10)
    ).toEqual({});
  });

  it("rejects tickets when fewer seats are available", () => {
    expect(
      validateSignup({ ...validValues, tickets: "3" }, 2)
    ).toEqual({ tickets: "Only 2 seats left" });
  });
});
