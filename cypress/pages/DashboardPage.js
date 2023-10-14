class DashboardPage {
  elements = {
    addCourseBtn: () => cy.get(".MuiGrid-root > .MuiButtonBase-root"),
    courseTitleInputField: () => cy.get('[data-testid="Title*"]'),
    courseDescriptionInputField: () => cy.get('[data-testid="Description*"]'),
    courseCategoryDropdown: () => cy.get("#demo-simple-select"),
    selectQualityAssuranceCourse: () => cy.get('[data-value="1"]'),
    offlineCourseLocationRadioBtn: () => cy.get('[data-testid="offline"]'),
    addressInputField: () => cy.get('[data-testid="Address*"]'),
    courseUrlTextField: () =>
      cy.get('[data-testid="CourseURL*(mustbeyoutube)"]'),
    secondAddCourseBtn: () => cy.contains("button", "+ Add Course"),
    courseCreationAlert: () => cy.contains("Course created successfully"),
  };

  addCourse() {
    this.elements.addCourseBtn().click();
    cy.viewport("macbook-16");
  }

  fillInFormDetails() {
    const courseTitle = "Learning Cypress Cohort 15";
    const courseDescription =
      "This course aims to teach students how to use cypress to automate tests";
    const address = "Quales address";
    this.elements
      .courseTitleInputField()
      .should("be.enabled")
      .type(courseTitle);
    this.elements
      .courseDescriptionInputField()
      .should("be.enabled")
      .type(courseDescription);
    this.elements.courseCategoryDropdown().should("be.visible").click();
    this.elements.selectQualityAssuranceCourse().should("be.visible").click();
    this.elements.offlineCourseLocationRadioBtn().should("be.enabled").click();
    this.elements.addressInputField().should("be.enabled").type(address);
    // this.elements.courseUrlTextField().should("be.enabled").type(youtubeLink);
    this.elements
      .secondAddCourseBtn()
      .should("be.visible")
      .click({ force: true });
  }

  verifyCourseHasBeenCreated() {
    this.elements.courseCreationAlert().should("be.visible");
  }
}

export const dashboardPage = new DashboardPage();
