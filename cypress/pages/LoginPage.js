class LoginPage {
  elements = {
    usernameInput: () => cy.get('[data-testid="EmailAddress"]'),
    passwordInput: () => cy.get('[data-testid="Password"]'),
    loginBtn: () => cy.contains("button", "Login"),
    errorMessage: () =>
      cy.contains(
        "Password must be 8 characters with at least one letter and one digit"
      ),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.elements.usernameInput().click().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  login(username, password) {
    this.elements.usernameInput().click().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }

  verifyLoginErrorMessage() {
    this.elements.errorMessage().should("be.visible");
  }
}

export const loginPage = new LoginPage();
