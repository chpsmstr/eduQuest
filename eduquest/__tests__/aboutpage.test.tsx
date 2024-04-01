import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import About from "@/app/About/page";

test('renders about page with correct content', () => {
    render(<About />);

    // Check if "Credits" heading is rendered
    const creditsHeading = screen.getByText('Credits');
    expect(creditsHeading).toBeTruthy();

    // Check if team member names are rendered
    const teamMemberNames = ['Ankkit Prakash', 'Daniel Penner', 'Mark Lovesey', 'Nolan Nishikawa', 'Rhys Smith'];
    teamMemberNames.forEach(name => {
      const memberName = screen.getByText(name);
      expect(memberName).toBeTruthy();
    });

    // Check if mission statement part 1 is rendered
    const missionStatement1 = screen.getByText('EduQuest is an innovative e-learning platform created by team members for our Software Engineering Course.');
    expect(missionStatement1).toBeTruthy();

    // Check if mission statement part 2 is rendered
    const missionStatement2 = screen.getByText('We hope that this platform can benefit both teachers and students alike in creating a fun learning environment.');
    expect(missionStatement2).toBeTruthy();

    const image = screen.getByAltText('Picture of a Controller');
    expect(image).toBeTruthy();
    expect(image.getAttribute('src')).toContain('/pixelteam.webp');

    // Check if Logo component is rendered with correct src attribute
    const logo = screen.getByAltText('Eduquest logo');
    expect(logo).toBeTruthy();
    expect(logo.getAttribute('src')).toContain("/eduQuestlogoresized2.webp");
  });
