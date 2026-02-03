import { defineConfig } from "cypress";

export const e2e = {
  baseUrl: 'http://192.168.1.11:2063/',
  setupNodeEvents(on, config) {
    // implement node event listeners here
  },
};