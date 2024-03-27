import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Admin from "@/app/Dashboard/adminDashboard/page";

// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
  render(<Admin />);
  

  //Create Class Button
//   const Register = screen.getByText("Registration").closest("a")!;
//   expect(Register).toBeTruthy();
//   expect(Register?.getAttribute("href")).toBe("/Dashboard/adminDashboard/register");
//   //Create Class Button
//   const Edit = screen.getByText("Edit").closest("a")!;
//   expect(Edit).toBeTruthy();
//   expect(Edit?.getAttribute("href")).toBe("/Dashboard/adminDashboard/edit");
  //Create Class Button
  const createClass = screen.getByText("+").closest("a")!;
  expect(createClass).toBeTruthy();
  expect(createClass?.getAttribute("href")).toBe("/CreateClass");
 
});
