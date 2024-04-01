import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Admin from "@/app/Dashboard/adminDashboard/page";

// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
  render(<Admin />);
  
    const createClass = screen.getByText("+").closest("a")!;
  expect(createClass).toBeTruthy();
  expect(createClass?.getAttribute("href")).toBe("/CreateClass");
  });

  test('render ClassNames component with ClassBox components', () => {
    render(<Admin />);

    // Check if dynamic content inside ClassBox components is rendered correctly
    const classLabels = screen.getAllByText(/Math 100|Chemistry 111|Physics 112|Biology 121|Comp-Sci 122|English 112/);
    expect(classLabels.length).toBe(12); 

    // Check if teacher names are rendered correctly
    const teacherNames = screen.getAllByText(/Dr. Meredith Stone|Dr. Alexander Patel|Dr. Eleanor Hayes|Dr. Benjamin Carter|Dr. Victoria Liu|Dr. Jim Thompson/);
    expect(teacherNames.length).toBe(12); 
  });
  

