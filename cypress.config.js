const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
    defaultCommandTimeout: 20000,  // 20 seconds for command timeout
    pageLoadTimeout: 30000,        // 30 seconds for page load timeout
    requestTimeout: 20000,         // 20 seconds for request timeout
    responseTimeout: 20000,        // 20 seconds for response timeout
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
