import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the sign up page", () => {
  cy.visit("https://www.preprod.alosim.com/register");
  cy.get("#email").type("ayo+77779@affinityclick.com");
  cy.get("#password").type("Affinityclick@1");
  cy.get("button").contains("Sign Up").click();
  cy.get(".sc-ikJyIC").click();
});

When("I agree to sign up", () => {
  cy.get(".sc-llYSUQ > .sc-eCImPb").click();
});
