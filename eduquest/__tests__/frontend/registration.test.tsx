import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Register from "@/app/Register/page";

// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
  render(<Register />);

  // Teacher Button
  const teacherReg = screen.getByText("Teacher").closest("a")!;
  expect(teacherReg).toBeTruthy();
  expect(teacherReg?.getAttribute("href")).toBe("/Register/TeacherRegistration");
    //Student Button
  const studentDashboard = screen.getByText("Student").closest("a")!;
  expect(studentDashboard).toBeTruthy();
  expect(studentDashboard?.getAttribute("href")).toBe("/Register/StudentRegistration");
  //Admin Button
  const Login = screen.getByText("Already have an account?").closest("a")!;
  expect(Login).toBeTruthy();
  expect(Login?.getAttribute("href")).toBe("/Login");
 
});
