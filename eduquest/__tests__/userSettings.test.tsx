import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "@/app/userSettings/page";

// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });
test('renders settings page with correct initial values', () => {
    render(<App />);

    // Check if input fields are rendered with correct initial values
    expect(screen.getByLabelText('First Name:').getAttribute('value')).toBe('John');
    expect(screen.getByLabelText('Last Name:').getAttribute('value')).toBe('Doe');
    expect(screen.getByLabelText('Email:').getAttribute('value')).toBe('john.doe@example.com');
    expect(screen.getByLabelText('Student ID:').getAttribute('value')).toBe('1234567890');
  });
  test('typing in input fields updates state', () => {
    render(<App />);

    // Typing in the input fields
    fireEvent.change(screen.getByLabelText('First Name:'), { target: { value: 'Jane' } });
    fireEvent.change(screen.getByLabelText('Last Name:'), { target: { value: 'Smith' } });
    fireEvent.change(screen.getByLabelText('Email:'), { target: { value: 'jane.smith@example.com' } });
    fireEvent.change(screen.getByLabelText('Student ID:'), { target: { value: '0987654321' } });

       // Check if input fields are rendered with correct initial values
       expect(screen.getByLabelText('First Name:').getAttribute('value')).toBe('Jane');
       expect(screen.getByLabelText('Last Name:').getAttribute('value')).toBe('Smith');
       expect(screen.getByLabelText('Email:').getAttribute('value')).toBe('jane.smith@example.com');
       expect(screen.getByLabelText('Student ID:').getAttribute('value')).toBe('0987654321');
   
  
    });
