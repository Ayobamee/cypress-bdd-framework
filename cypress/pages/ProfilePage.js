class ProfilePage {
  elements = {
    profileModule: () => cy.contains("Profile"),
    profileModuleMobile: () =>
      cy.get("div[class='sc-hYQoXb fdPwZJ'] div:nth-child(3) a:nth-child(1)"),
    notificationsModule: () => cy.get("div").contains("Notifications"),
    marketingNotifications: () => cy.contains("Marketing Notifications"),
    packageExpiryNotifications: () =>
      cy.contains("Package Expiry Notifications"),
    underlaytext1: () => cy.contains("Stay up to date on announcements"),
    underlaytext2: () =>
      cy.contains("Receive alerts when your data package is about to expire"),
    manageBillingModule: () => cy.get("div").contains("Manage Billing"),
    addCardLabel: () => cy.get("div").contains("Add"),
    cardNameTextBox: () => cy.get("#name"),
    cardNumberTextBox: () =>
      cy.get("#card-number-element > .__PrivateStripeElement > iframe"),
    addCardLabelAlocashVoucher: () => cy.get("a").contains("Add"),
    redeemAlocashDiv: () => cy.get("div").contains("Redeem aloCASH Voucher"),
    redeemBtn: () => cy.get("button").contains("Redeem"),
    haveAcodeTextBox: () => cy.get("input[placeholder='Have a code?']"),
  };

  clickProfile() {
    this.elements.profileModule().click();
  }

  clickProfileOnMobile() {
    this.elements.profileModuleMobile().click();
  }

  clickNotifications() {
    this.elements.notificationsModule().click();
  }

  assertNotificationsModule() {
    this.elements.marketingNotifications().should("be.visible");
    this.elements.underlaytext1().should("be.visible");
    this.elements.packageExpiryNotifications().should("be.visible");
    this.elements.underlaytext2().should("be.visible");
  }

  clickAddCard() {
    const cardName = "Automated Test Name";
    const cardNumber = "4242424242424242";
    this.elements.manageBillingModule().click();
    this.elements.addCardLabel().click();
    this.elements.cardNameTextBox().type(cardName);
    cy.get("#card-number-element > .__PrivateStripeElement > iframe")
      .iframe()
      .within(($iframeBody) => {
        cy.wrap($iframeBody)
          .find('input[name="cardnumber"]')
          .type("4242424242424242");
      });
  }

  clickManageBillingModule() {
    this.elements.manageBillingModule().click();
  }

  verifyRedeemAlocashVoucher() {
    this.elements.addCardLabelAlocashVoucher().click();
    this.elements.redeemAlocashDiv().should("be.visible");
    this.elements.redeemBtn().should("be.disabled");
    this.elements.haveAcodeTextBox().should("be.enabled");
  }
}

export const profilePage = new ProfilePage();
