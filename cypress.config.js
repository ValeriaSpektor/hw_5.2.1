const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "833guv",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
