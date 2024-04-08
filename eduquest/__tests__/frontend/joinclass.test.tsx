import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import JoinClass from "@/app/JoinClass/page";



  test('render JoinClass page', () => {
    render(<JoinClass />);
     // Check if Eduquest logo is rendered
      // Check if Eduquest logo is rendered
    const eduquestLogo = screen.getByAltText('Eduquest logo');
    expect(eduquestLogo).toBeTruthy();

    // Check if "Join a Class" text is rendered
    const joinClassText = screen.getByText('Join a Class');
    expect(joinClassText).toBeTruthy();

    // Check if form elements are rendered
    const classJoinCodeTitle = screen.getByText('Class Join Code:');
    expect(classJoinCodeTitle).toBeTruthy();
    const classJoinCodeInput = screen.getByPlaceholderText('ex: ABCD1234');
    expect(classJoinCodeInput).toBeTruthy();

    // Check if "Join Class" button is rendered
    const joinClassButton = screen.getByText('Join Class');
    expect(joinClassButton).toBeTruthy();

   
  
  });




