Feature: This feature ensures user's profile can be managed
    As a user i want to visit the profile page so i can manage my profile successfully
    Scenario: Notifications - View notifications
        Given A user "Dan" is logged in to the aloSim app
        When I click the profile module
        And I click the notifications module
        Then I should see all the elements in the notifications module

    Scenario: Manage Billing - View Redeem aloCash
        Given A user "Bill" is logged in to the aloSim app
        When I click the profile module
        And I click the Manage billing module
        Then I can view redeem alocash voucher

    Scenario: Manage Billing - View Redeem aloCash on iOS
        Given I am browser the alosim web app on "iOS"


