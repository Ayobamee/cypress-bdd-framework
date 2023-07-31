Feature: This feature ensures that the login functionality works appropriately
    As a user i want to visit the login page so i can login successfully
    Background:
        Given A user is at the aloSim web app login page
    Scenario: Success Login
        When A user enters the username "ayobami+1@affinityclick.com", the password "Hushed2023!", and clicks on the login button
        Then the url will contains the esim subdirectory
    Scenario: Blocked Login
        When A user enters the username "111@affinityclick.com", the password "secret_sauce", and clicks on the login button
        Then The appropriate error message is displayed
    Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username              | password     |
            | 111@affinityclick.com | secret_sauce |
        Then The appropriate error message is displayed
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username              | password     |
            | 111@affinityclick.com | testPassword |
        Then The appropriate error message is displayed