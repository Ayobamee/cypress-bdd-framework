Feature: This feature ensures that the login functionality works appropriately
  As a user i want to visit the login page so i can login successfully

  Scenario: Successful Login
    Given A user is at the aloSim web app login page
    When A user enters their correct credentials
    Then The url will contain the esim subdirectory

  Scenario: Failed Login
    Given A user is at the aloSim web app login page
    When A user enters their incorrect credentials
    Then The appropriate error message is displayed

  Scenario: Successful Login on an iOS device
    Given I am on the login screen of the alosim web app on "iOS"
    When A user enters their correct credentials
    Then The url will contain the esim subdirectory

  Scenario: Failed Login on an iOS device
    Given I am on the login screen of the alosim web app on "iOS"
    When A user enters their incorrect credentials
    Then The appropriate error message is displayed

  Scenario: Successful Login on a tablet device
    Given I am on the login screen of the alosim web app on "tablet"
    When A user enters their correct credentials
    Then The url will contain the esim subdirectory

  Scenario: Failed Login on a tablet device
    Given I am on the login screen of the alosim web app on "tablet"
    When A user enters their incorrect credentials
    Then The appropriate error message is displayed

  Scenario: Successful Login on a Samsung device
    Given I am on the login screen of the alosim web app on "samsung"
    When A user enters their correct credentials
    Then The url will contain the esim subdirectory

  Scenario: Failed Login on a Samsung device
    Given I am on the login screen of the alosim web app on "samsung"
    When A user enters their incorrect credentials
    Then The appropriate error message is displayed
