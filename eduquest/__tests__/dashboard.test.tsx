import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Dashboard from "@/app/Dashboard/page";

// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
  render(<Dashboard />);

  // Teacher Button
  const teacherDashboard = screen.getByText("Teacher").closest("a")!;
  expect(teacherDashboard).toBeTruthy();
  expect(teacherDashboard?.getAttribute("href")).toBe("Dashboard/teacherDashboard");
    //Student Button
  const studentDashboard = screen.getByText("Student").closest("a")!;
  expect(studentDashboard).toBeTruthy();
  expect(studentDashboard?.getAttribute("href")).toBe("Dashboard/studentDashboard");
  //Admin Button
  const adminDashboard = screen.getByText("Admin").closest("a")!;
  expect(adminDashboard).toBeTruthy();
  expect(adminDashboard?.getAttribute("href")).toBe("Dashboard/adminDashboard");
 
});
