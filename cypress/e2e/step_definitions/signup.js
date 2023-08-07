import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { signUpPage } from "@pages/SignUpPage";

Given("I am on the sign up page", () => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    cy.visit("/register");
    signUpPage.submitSignUp(testDataInfo.newUsername, testDataInfo.password);
  });
});

When("I agree to sign up", () => {
  signUpPage.clickAgreeSignUp();
});
