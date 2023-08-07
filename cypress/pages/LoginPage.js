class LoginPage {
  elements = {
    usernameInput: () => cy.get('input[name="email"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn: () => cy.get('button[type="submit"]'),
    errorMessage: () => cy.get(".sc-bkkeKt"),
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
}

export const loginPage = new LoginPage();
