import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginPage } from "@pages/LoginPage";

const Username = "ayobami+1@affinityclick.com";
const Password = "Hushed2023!";
Given("I am browsing the alosim web app on {string}", (device) => {
  switch (device) {
    case "web":
      cy.viewport(1440, 1245);
      cy.visit("/");
      cy.viewport(1440, 1245);
      break;
    case "iOS":
      cy.viewport("iphone-8");
      cy.visit("/");
      break;
    case "tablet":
      cy.viewport(768, 660);
      cy.visit("/");
      break;
  }
});

Given(
  "A user {string} is logged in to the aloSim app",
  (username, password, name, device) => {
    cy.visit("/login");
    loginPage.submitLogin(Username, Password);
  }
);

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
