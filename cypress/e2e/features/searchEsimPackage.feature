Feature: This feature ensures that a user can search for an eSim
    As a user i want to search for an eSim package successfully
    Scenario: Search for ESim under countries
        Given A user "Carl" is logged in to the aloSim app
        When I search for an eSim package from the countries section
        Then I can see the eSim package searched for

    Scenario: Search for ESim under countries on iOS
        Given I am logged into the alosim web app on "iOS"
        When I search for an eSim package from the countries section
        Then I can see the eSim package searched for

    Scenario: Search for ESim under countries on Samsung
        Given I am logged into the alosim web app on "samsung"
        When I search for an eSim package from the countries section
        Then I can see the eSim package searched for


    Scenario: Search for ESim under countries on tablet
        Given I am logged into the alosim web app on "tablet"
        When I search for an eSim package from the countries section
        Then I can see the eSim package searched for


    Scenario: Search for ESim under regions
        Given A user "Tom" is logged in to the aloSim app
        When I search for an eSim package from the region section
        Then I can see the eSim package been searched for

    Scenario: Search for ESim under regions on iOS
        Given I am logged into the alosim web app on "iOS"
        When I search for an eSim package from the region section
        Then I can see the eSim package been searched for

    Scenario: Search for ESim under regions on Samsung
        Given I am logged into the alosim web app on "samsung"
        When I search for an eSim package from the region section
        Then I can see the eSim package been searched for

    Scenario: Search for ESim under regions on tablet
        Given I am logged into the alosim web app on "tablet"
        When I search for an eSim package from the region section
        Then I can see the eSim package been searched for