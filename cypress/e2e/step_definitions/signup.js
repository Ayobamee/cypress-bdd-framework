

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { signUpPage } from "@pages/SignUpPage";


Given("I am on the sign up page", () => {
  cy.fixture("testData").then((users) => {
    const testUser = users.userDetails;
    cy.visit("/register");
    signUpPage.submitSignUp(testUser.username, testUser.password);
  });
});

When("I agree to sign up", () => {
  signUpPage.clickAgreeSignUp();
});

