import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Assignment from "@/app/Dashboard/studentDashboard/[studentClassId]/Assignment/[assignmentId]/page";

test("Invalid quizId Parameters", () => {
  render(
  <Assignment params={{ assignmentId: 'Assignment1' }} />
  )

 // Submit Button
 const submitButton = screen.getByText("Submit").closest("button");
 expect(submitButton).toBeTruthy();
 expect(submitButton?.getAttribute("type")).toBe("submit");
});
  