import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
import { signUpPage } from "@pages/SignUpPage";

Given("I am on the sign up page", () => {
  cy.visit("/register");
  signUpPage.submitSignUp("ayo+77779@affinityclick.com", "Affinityclick@1");
});

When("I agree to sign up", () => {
  signUpPage.clickAgreeSignUp();
});
