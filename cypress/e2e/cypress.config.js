const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      username: "ayobami+1@affinityclick.com";
      // implement node event listeners here
    },
  },
});
