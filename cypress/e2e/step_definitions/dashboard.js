import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { dashboardPage } from "@pages/DashboardPage";

When("I click select preferred eSim package", () => {
  dashboardPage.selectpreferredEsimPkg();
});

Then("I can purchase an eSim successfully", () => {
  dashboardPage.clickBuy();
  dashboardPage.checkOutWithCard();
});

When("I search for an eSim package from the countries section", () => {
  dashboardPage.searchESimPackage();
});

Then("I can see the eSim package searched for", () => {
  dashboardPage.searchedCanadaIcon();
});

When("I search for an eSim package from the region section", () => {
  dashboardPage.clickRegion();
});

Then("I can see the eSim package been searched for", () => {
  dashboardPage.searchedUnitedStatesIcon();
});

Then("I can see all popular countries with E-Sim packages", () => {
  dashboardPage.viewCountries();
});

Then("I can view all countries with E-Sim packages", () => {
  dashboardPage.viewCountriesBelowPopular();
});
