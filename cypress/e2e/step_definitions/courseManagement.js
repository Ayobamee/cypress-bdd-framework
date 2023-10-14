import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "@pages/DashboardPage";

When("They click the add a course button", () => {
  dashboardPage.addCourse();
});

Then("They fill out the course form", () => {
  dashboardPage.fillInFormDetails();
});

Then("The course should be created successfully", () => {
  dashboardPage.verifyCourseHasBeenCreated();
});
