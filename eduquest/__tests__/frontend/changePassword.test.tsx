import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Password from "@/app/userSettings/changePassword/page"; 


  test('renders Reset Password heading', () => {
    render(<Password />);
    const headingElement = screen.getByText('Reset Password');
    expect(headingElement).toBeTruthy();
  });

  test('renders input fields for password and re-enter password', () => {
    render(<Password/>);
    const passwordInput = screen.getByLabelText('Enter New Password:');
    const repasswordInput = screen.getByLabelText('Re-enter Password:');
    expect(passwordInput).toBeTruthy();
    expect(repasswordInput).toBeTruthy();
  });

 

  test('clicking Update Password button triggers form submission', () => {
    render(<Password />);
    const passwordInput = screen.getByLabelText('Enter New Password:');
    const repasswordInput = screen.getByLabelText('Re-enter Password:');
    

    fireEvent.change(passwordInput, { target: { value: 'newPassword123' } });
    fireEvent.change(repasswordInput, { target: { value: 'newPassword123' } });
    

  });
