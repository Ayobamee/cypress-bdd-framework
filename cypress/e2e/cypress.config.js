const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      MAILOSAUR_API_KEY: "VARedn4VvrgOR6bmnmQQdHVIrd0G16sf",
    },
    setupNodeEvents(on, config) {
      username: "ayobami+1@affinityclick.com";
      // implement node event listeners here
    },
  },
});
