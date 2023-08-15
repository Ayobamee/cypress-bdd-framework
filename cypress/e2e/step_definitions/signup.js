import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { signUpPage } from "@pages/SignUpPage";

// Given("I am on the sign up page", () => {
//   cy.fixture("testData").then((info) => {
//     const testDataInfo = info.userDetails;
//     cy.visit("/register");
//     signUpPage.submitSignUp(testDataInfo.newUsername, testDataInfo.password);
//   });
// });

// When("I agree to sign up", () => {
//   signUpPage.clickAgreeSignUp();
// });

// Then("I should be signed up successfully", () => {
//   const serverId = "gyyp2dii";
//   const serverDomain = "determine-warn@gyyp2dii.mailosaur.net";
//   const emailAddress = "password-reset" + serverDomain;
//   cy.mailosaurGetMessage(serverId, {
//     sentTo: emailAddress,
//   }).then((email) => {
//     expect(email.subject).to.equal("Reset your password");
//     passwordResetLink = email.text.links[0].href;
//   });

Given("I am on the sign up page", () => {
  const serverId = "gyyp2dii";
  const serverDomain = "determine-warn@gyyp2dii.mailosaur.net";
  const emailAddress = "password-reset" + serverDomain;
  cy.visit("/register");
  cy.get('input[name="email"]').type(emailAddress);
  cy.get('input[name="password"]').type("Hushed2023!");
  cy.contains("Sign Up").click();
  // signUpPage.clickAgreeSignUp();
  cy.mailosaurGetMessage(serverId, {
    sentTo: emailAddress,
  }).then((email) => {
    expect(email.subject).to.equal("Reset your password");
    passwordResetLink = email.text.links[0].href;
  });
});
