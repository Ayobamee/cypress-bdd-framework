import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";
Given("I am logged into the alosim web app on {string}", (device) => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    switch (device) {
      case "iOS":
        cy.viewport("iphone-8");
        cy.clearCookies();
        cy.visit("/login");
        loginPage.login(testDataInfo.existingUsername, testDataInfo.password);
        break;

      case "samsung":
        cy.viewport("samsung-s10");
        cy.clearCookies();
        cy.visit("/login");
        loginPage.login(testDataInfo.existingUsername, testDataInfo.password);
        break;
      case "tablet":
        cy.viewport("ipad-2");
        cy.clearCookies();
        cy.visit("/login");
        loginPage.login(testDataInfo.existingUsername, testDataInfo.password);
        break;
    }
  });
});

Given(
  "I am on the login screen of the quales web app on {string}",
  (device) => {
    switch (device) {
      case "iOS":
        cy.viewport("iphone-8");
        cy.clearCookies();
        cy.visit("/login");

        break;
      case "tablet":
        cy.viewport("ipad-2");
        cy.clearCookies();
        cy.visit("/login");

        break;

      case "samsung":
        cy.viewport("samsung-s10");
        cy.clearCookies();
        cy.visit("/login");

        break;
    }
  }
);

Given("A user {string} is logged in to the quales app", () => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    cy.clearCookies();
    cy.visit("/login");
    loginPage.login(testDataInfo.existingUsername, testDataInfo.password);
  });
});

Given("A user is at the quales web app login page", () => {
  cy.clearCookies();
  cy.visit("/login");
});

When("A user enters their correct credentials", () => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    loginPage.login(testDataInfo.existingUsername, testDataInfo.password);
  });
});

When("A user enters their incorrect credentials", () => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    loginPage.login(
      testDataInfo.existingUsername,
      testDataInfo.incorrectPassword
    );
  });
});

Then("The url will contain the quales subdirectory", () => {
  cy.url().should("contains", "/courses");
});
Then("The appropriate error message is displayed", () => {
  loginPage.verifyLoginErrorMessage();
});
