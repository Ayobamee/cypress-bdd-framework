import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

Given("I am browsing the alosim web app on {string}", (device) => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    switch (device) {
      case "iOS":
        cy.viewport("iphone-8");
        cy.visit("/login");
        loginPage.login(testDataInfo.username, testDataInfo.password);
        break;
      case "tablet":
        cy.viewport("ipad-2");
        cy.visit("/login");
        loginPage.login(testDataInfo.username, testDataInfo.password);
        break;
    }
  });
});

Given("A user {string} is logged in to the aloSim app", () => {
  cy.fixture("testData").then((info) => {
    const testDataInfo = info.userDetails;
    cy.visit("/login");
    loginPage.login(testDataInfo.existingUsername, testDataInfo.password);
  });
});

Given("A user is at the aloSim web app login page", () => {
  cy.visit("/login");
});

const errMessage =
  "Could not Log In with this username and password. Please check your entries and try again";

When(
  "A user enters the username {string}, the password {string}, and clicks on the login button",
  (username, password) => {
    loginPage.submitLogin(username, password);
  }
);

When(
  "A user provides incorrect credentials, and clicks on the login button",
  (table) => {
    table.hashes().forEach((row) => {
      cy.log(row.username);
      cy.log(row.password);
      loginPage.submitLogin(row.username, row.password);
    });
  }
);
Then("the url will contains the esim subdirectory", () => {
  cy.url().should("contains", "/esim-store/region");
});
Then("The appropriate error message is displayed", () => {
  loginPage.elements.errorMessage().should("contain", errMessage);
});
