import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Teacher from "@/app/Register/TeacherRegistration/page";
import { Input } from "postcss";
// test("Home", () => {
//   render(<Home />);

//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Teacher Valid Inputs", () => {
  render(<Teacher/>);
  const firstNameTitle = screen.getByText('First Name:');

  expect(firstNameTitle.nodeName).toBe('DIV');
  expect(firstNameTitle.getAttribute('role')).toBe(null);

  const lastNameTitle = screen.getByText('Last Name:');

  expect(lastNameTitle.nodeName).toBe('DIV');
  expect(lastNameTitle.getAttribute('role')).toBe(null);

  const usernameTitle = screen.getByText('Username:');

  expect(usernameTitle.nodeName).toBe('DIV');
  expect(usernameTitle.getAttribute('role')).toBe(null);

  const emailTitle = screen.getByText('Email:');

  expect(emailTitle.nodeName).toBe('DIV');
  expect(emailTitle.getAttribute('role')).toBe(null);

  const facultyIdTitle = screen.getByText('Faculty ID:');
  expect(facultyIdTitle.nodeName).toBe('DIV');
  expect(facultyIdTitle.getAttribute('role')).toBe(null);

  const passwordTitle = screen.getByText('Password:');
  expect(passwordTitle.nodeName).toBe('DIV');
  expect(passwordTitle.getAttribute('role')).toBe(null);

  const confirmPasswordTitle = screen.getByText('Confirm Password:');
  expect(confirmPasswordTitle.nodeName).toBe('DIV');
  expect(confirmPasswordTitle.getAttribute('role')).toBe(null);

  // Check submit button
  const submitButton = screen.getByText('Submit');
  expect(submitButton.nodeName).toBe('BUTTON');
  expect(submitButton.getAttribute('type')).toBe(null);

    // 
    //Submit Button
    const Submit = screen.getByText("Submit").closest("a")!;
    expect(Submit).toBeTruthy();
    expect(Submit?.getAttribute("href")).toBe("");
   
  });
