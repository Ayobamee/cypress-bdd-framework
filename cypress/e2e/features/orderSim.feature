Feature: This feature ensures that a user can order an eSIM
    As a user i want to visit the aloSim app so that i can order an e-sim successfully
    Scenario: Order Sim - Purchase with card
        Given A user "Bob" is logged in to the aloSim app
        When I click select preferred eSim package
        Then I can purchase an eSim successfully
