import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { profilePage } from "@pages/ProfilePage";

When("I click the profile module", () => {
  profilePage.clickProfile();
});

When("I click the profile module on mobile", () => {
  profilePage.clickProfileOnMobile();
});

When("I click the notifications module", () => {
  profilePage.clickNotifications();
});

Then("I should see all the elements in the notifications module", () => {
  profilePage.assertNotificationsModule();
});

When("I click the add card label", () => {
  profilePage.clickAddCard();
});

When("I click the Manage billing module", () => {
  profilePage.clickManageBillingModule();
});

Then("I can view redeem alocash voucher", () => {
  profilePage.verifyRedeemAlocashVoucher();
});
