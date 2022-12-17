const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'cgr3oy',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
