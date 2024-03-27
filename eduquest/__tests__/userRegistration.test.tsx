import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Teacher from "@/app/Register/TeacherRegistration/page";
// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Teacher Valid Inputs", () => {
    render(<Teacher/>);
  
    // 
    //Admin Button
    const Submit = screen.getByText("Submit").closest("a")!;
    expect(Submit).toBeTruthy();
    expect(Submit?.getAttribute("href")).toBe("");
   
  });
