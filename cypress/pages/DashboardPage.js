class DashboardPage {
  elements = {
    austriaBtn: () => cy.get("button").contains("h3", "Austria"),
    canadaBtn: () => cy.get("button").contains("h3", "Canada"),
    fijiBtn: () => cy.get("button").contains("h3", "Fiji"),
    indiaBtn: () => cy.get("button").contains("h3", "India"),
    japanBtn: () => cy.get("button").contains("h3", "Japan"),
    kosovoBtn: () => cy.get("button").contains("h3", "Kosovo"),
    mexicoBtn: () => cy.get("button").contains("h3", "Mexico"),
    polandBtn: () => cy.get("button").contains("h3", "Poland"),
    unitedArabEmirateBtn: () =>
      cy.get("button").contains("h3", "United Arab Emirate"),
    unitedStatesBtn: () => cy.get("button").contains("h3", "United States"),
    canadaPlan: () => cy.contains("p", "Valid for 7 days"),
    buyBtn: () => cy.get("button").contains("Buy for $7.50"),
    continueBtn: () => cy.xpath('//button[normalize-space()="Continue"]'),
    checkbox: () => cy.get(".sc-dZpvmy", { timeout: 15000 }),
    checkoutPage: () => cy.get(".sc-TBWPX"),
    packageSearchBox: () => cy.get("input[placeholder='Search']"),
    outputOfSearchCanada: () => cy.contains("h3", "Canada"),
    regionBtn: () => cy.get("button").contains("Regions"),
    outputOfSearchUnitedStates: () => cy.contains("h3", "United States"),
    austriaPopularBtn: () => cy.contains("button", "Austria"),
    canadaPopularBtn: () => cy.contains("button", "Canada"),
    fijiPopularBtn: () => cy.contains("button", "Fiji"),
    indiaPopularBtn: () => cy.contains("button", "India"),
    scrollBtnonPopularSegment: () =>
      cy.xpath("//button[@class='sc-iqVWFU fzSIkb sc-kTLmzF etttbC']"),
    japanPopularBtn: () => cy.contains("button", "Japan"),
    kosovoPopularBtn: () => cy.contains("button", "Kosovo"),
    mexicoPopularBtn: () => cy.contains("button", "Mexico"),
    unitedArabEmiratesPopularBtn: () =>
      cy.contains("button", "United Arab Emirate"),
    unitedStatesPopularBtn: () => cy.contains("button", "United States"),
  };

  selectpreferredEsimPkg() {
    cy.wait(3000);
    this.elements.canadaBtn().click();
    this.elements.canadaPlan().click();
  }

  clickBuy() {
    this.elements.buyBtn().click();
    this.elements.continueBtn().click();
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

  viewCountries() {
    this.elements.austriaPopularBtn().should("be.visible");
    this.elements.canadaPopularBtn().should("be.visible");
    this.elements.fijiPopularBtn().should("be.visible");
    this.elements.scrollBtnonPopularSegment().click();
    this.elements.indiaPopularBtn().should("be.visible");
    this.elements.japanPopularBtn().should("be.visible");
    this.elements.scrollBtnonPopularSegment().click();
    this.elements.kosovoPopularBtn().should("be.visible");
    for (let i = 0; i < 4; i++) {
      this.elements.scrollBtnonPopularSegment().click();
    }
    this.elements.mexicoPopularBtn().should("be.visible");
    this.elements.scrollBtnonPopularSegment().click();
    this.elements.unitedArabEmiratesPopularBtn().should("be.visible");
    this.elements.scrollBtnonPopularSegment().click();
    this.elements.unitedStatesPopularBtn().should("be.visible");
  }

  viewCountriesBelowPopular() {
    this.elements.austriaBtn().should("be.visible");
    this.elements.canadaBtn().should("be.visible");
    this.elements.fijiBtn().should("be.visible");
    this.elements.indiaBtn().should("be.visible");
    this.elements.japanBtn().scrollIntoView().should("be.visible");
    this.elements.kosovoBtn().scrollIntoView().should("be.visible");
    this.elements.mexicoBtn().scrollIntoView().should("be.visible");
    this.elements.polandBtn().scrollIntoView().should("be.visible");
    this.elements.unitedArabEmirateBtn().scrollIntoView().should("be.visible");
    this.elements.unitedStatesBtn().scrollIntoView().should("be.visible");
  }
}

export const dashboardPage = new DashboardPage();
