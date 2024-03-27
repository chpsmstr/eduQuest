import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Student from "@/app/Dashboard/studentDashboard/page";

// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
  render(<Student />);


  
  //Create Class Button
  const joinClass = screen.getByText("+").closest("a")!;
  expect(joinClass).toBeTruthy();
  expect(joinClass?.getAttribute("href")).toBe("/JoinClass");
 
});
