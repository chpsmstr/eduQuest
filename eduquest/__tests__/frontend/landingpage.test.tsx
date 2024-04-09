import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";

// test("Home", () => {
//   render(<Home />);
//   expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeDefined();
// });

test("Navigation Buttons Work", () => {
  render(<Home />);

  // Enter Button
  const homeEnterButton = screen.getByText("Enter").closest("a")!;
  expect(homeEnterButton).toBeTruthy();
  expect(homeEnterButton?.getAttribute("href")).toBe("/Login");

  // Credits Button
  const CreditsButton = screen.getByText("Credits").closest("a")!;
  expect(CreditsButton).toBeTruthy();
  expect(CreditsButton?.getAttribute("href")).toBe("/About");

  // Settings Button
  const SettingsButton = screen.getByText("Settings").closest("a")!;
  expect(SettingsButton).toBeTruthy();
  expect(SettingsButton?.getAttribute("href")).toBe("/userSettings");

  // Exit Button
  const ExitButton = screen.getByText("Exit").closest("a")!;
  expect(ExitButton).toBeTruthy();
  expect(ExitButton?.getAttribute("href")).toBe("");
});
