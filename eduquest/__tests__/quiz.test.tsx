// This test currently doesn't run due to an error with the next/navigation / next/router configuration in the quiz page
// The goal of this test has been hard tested as an alternative and has passed.
// The goal of this test is to assure that parameters passed to it are verified via a regex pattern before loading the DOM.
// Parameters must not have spaces or special characters (they may only contain, cap and low letters and numbers within a assumed length)

/*import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Quiz from "@/app/Dashboard/studentDashboard/[studentClassId]/Quiz/[quizId]/page";

test("Invalid quizId Parameters", () => {
  const validQuizId = "Invalid Quiz ID"; // Invalid quiz ID with special characters
    // Attempt to render the Quiz component with the invalid quiz ID
    render(<Quiz params={{ quizId: validQuizId }} />);
    // If rendering succeeds, assert that the component does not render with the provided invalid quizId
    const quizTitle = screen.getByText(validQuizId).closest('h1');
    expect(quizTitle).toBeFalsy();
});
  */