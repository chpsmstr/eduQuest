/*import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Class from "@/app/Dashboard/studentDashboard/[studentClassId]/page";
import Grade from "@/app/Dashboard/studentDashboard/[studentClassId]/Grades/[gradesId]/page";

// test("Home", () => {
//   render(<Home />);
//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
    const stuId = 3;
    const gradeId = '3';
    render(<Class params={{ studentClassId: stuId }} />
    );
    render(
        <Grade params={{ studentClassId: gradeId }} />
    );

    const submitButton = screen.getByText(gradeId).closest("h1");
    expect(submitButton).toBeTruthy();
    expect(submitButton?.getAttribute("className")).toBe("text-5xl relative bottom-20 px-4");
});

*/