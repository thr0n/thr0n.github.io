import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:8000",
    specPattern: "cypress/e2e",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
