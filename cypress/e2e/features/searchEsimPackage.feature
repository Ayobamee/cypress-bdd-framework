Feature: This feature ensures that a user can search for an eSim
    As a user i want to search for an eSim package successfully
    Scenario: Search for ESim under countries
        Given A user "Carl" is logged in to the aloSim app
        When I search for an eSim package from the countries section
        Then I can see the eSim package searched for


    Scenario: Search for ESim under regions
        Given A user "Tom" is logged in to the aloSim app
        When I search for an eSim package from the region section
        Then I can see the eSim package been searched for

