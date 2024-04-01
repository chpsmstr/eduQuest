import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Teacher from "@/app/Dashboard/teacherDashboard/page";

  test('render ClassNames component with ClassBox components', () => {
    render(<Teacher />);

    // Check if dynamic content inside ClassBox components is rendered correctly
    const classLabels = screen.getAllByText(/Math 100|Chemistry 111|Physics 112|Biology 121|Comp-Sci 122|English 112/);
    expect(classLabels.length).toBe(6); 

  });
