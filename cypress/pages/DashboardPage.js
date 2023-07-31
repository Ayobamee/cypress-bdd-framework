class DashboardPage {
  elements = {
    canadaBtn: () => cy.get("button").contains("h3", "Canada"),
    canadaPlan: () => cy.contains("p", "Valid for 7 days"),
    buyBtn: () => cy.get("button").contains("Buy for $4.50"),
    checkbox: () => cy.get(".sc-eZKLwX", { timeout: 15000 }),
    checkoutPage: () => cy.get(".sc-TBWPX"),
    packageSearchBox: () => cy.get("input[placeholder='Search']"),
    outputOfSearchCanada: () => cy.contains("h3", "Canada"),
    regionBtn: () => cy.get("button").contains("Regions"),
    outputOfSearchUnitedStates: () => cy.contains("h3", "United States"),
  };

  selectpreferredEsimPkg() {
    this.elements.canadaBtn().click();
    this.elements.canadaPlan().click();
  }

  clickBuy() {
    this.elements.buyBtn().click();
  }

  checkOutWithCard() {
    cy.wait(10000);
    this.elements.checkoutPage().scrollTo("bottom");
    this.elements.checkbox().should("be.visible").click();
    this.elements.buyBtn().click();
    cy.wait(5000);
    cy.url().should("include", "/esim-store/receipt");
  }

  searchESimPackage() {
    this.elements.packageSearchBox().type("Canada");
  }

  searchedCanadaIcon() {
    this.elements.outputOfSearchCanada().should("be.visible");
  }

  clickRegion() {
    this.elements.regionBtn().should("be.visible").click();
    this.elements.packageSearchBox().type("United States");
  }

  searchedUnitedStatesIcon() {
    this.elements.outputOfSearchUnitedStates().should("be.visible");
  }
}

export const dashboardPage = new DashboardPage();
