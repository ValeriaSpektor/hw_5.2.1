const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "bzbrht",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
  taskTimeout: 10000
});
