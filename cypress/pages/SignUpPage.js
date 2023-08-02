class SignUpPage {
  elements = {
    usernameInput: () => cy.get('input[name="email"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    signUpBtn: () => cy.get("button").contains("Sign Up"),
    agreeSignUpBtn: () => cy.get(".sc-llYSUQ > .sc-eCImPb"),
  };

  submitSignUp(username, password) {
    this.elements.usernameInput().click().type(username);
    this.elements.passwordInput().click().type(password);
    this.elements.signUpBtn().click();
  }

  clickAgreeSignUp() {
    this.elements.agreeSignUpBtn().click();
  }
}

export const signUpPage = new SignUpPage();
