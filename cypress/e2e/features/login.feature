Feature: This feature ensures that the login functionality works appropriately
    As a user i want to visit the login page so i can login successfully
    Background:
        Given A user is at the aloSim web app login page
    Scenario: Successful Login
        When A user enters their correct credentials
        Then The url will contain the esim subdirectory

          Scenario: Failed Login
        When A user enters their incorrect credentials
        Then The appropriate error message is displayed
