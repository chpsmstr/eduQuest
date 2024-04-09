import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import CreateClass from "@/app/UserPages/Admin/CreateClass/page";



  test('render CreateClass page', () => {
    render(<CreateClass />);

    // Check if Eduquest logo is rendered
    const eduquestLogo = screen.getByAltText('Eduquest logo');
    expect(eduquestLogo).toBeTruthy();

    // Check if "Create a Class" text is rendered
    const createClassText = screen.getByText('Create a Class');
    expect(createClassText).toBeTruthy();

    // Check if form elements are rendered
    const classNameTitle = screen.getByText('Class Name:');
    expect(classNameTitle).toBeTruthy();
    const classNameInput = screen.getByPlaceholderText('ex: Math 100');
    expect(classNameInput).toBeTruthy();

    const teacherIdTitle = screen.getByText('Teacher Id:');
    expect(teacherIdTitle).toBeTruthy();
    const teacherIdInput = screen.getByPlaceholderText('ex: 1234');
    expect(teacherIdInput).toBeTruthy();

    const classColourTitle = screen.getByText('Class Colour:');
    expect(classColourTitle).toBeTruthy();
     // Check if the select element exists and has the correct ID
     const classColourSelect = screen.getByText('Select a colour');
     expect(classColourSelect).toBeTruthy();

    const classSectionTitle = screen.getByText('Class Section:');
    expect(classSectionTitle).toBeTruthy();
    const classSectionInput = screen.getByPlaceholderText('ex: 101');
    expect(classSectionInput).toBeTruthy();

    const classDescriptionTitle = screen.getByText('Class Description:');
    expect(classDescriptionTitle).toBeTruthy();
    const classDescriptionTextarea = screen.getByPlaceholderText('ex: Derivatives of elementary functions and limits.');
    expect(classDescriptionTextarea).toBeTruthy();

    const classIdTitle = screen.getByText('Unique Class Code:');
    expect(classIdTitle).toBeTruthy();
    const classIdInput = screen.getByPlaceholderText('ex: ABCD1234');
    expect(classIdInput).toBeTruthy();
    expect(classIdInput.getAttribute('readonly')).toBe(''); // Ensure class code input is read-only

    // Check if "Generate Code" button is rendered
    const generateCodeButton = screen.getByText('Generate Code');
    expect(generateCodeButton).toBeTruthy();

    // Check if "Create Class" button is rendered
    const createClassButton = screen.getByText('Create Class');
    expect(createClassButton).toBeTruthy();

  });




