Feature: This feature ensures that user can create course
  As a user i want to visit the dashboard page so that I can create a course successfully

  Scenario: Course Creation
    Given A user "Shehu" is logged in to the quales app
    When They click the add a course button
    Then They fill out the course form
    Then The course should be created successfully

