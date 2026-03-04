import { defineConfig } from "cypress";
import xlsx from "xlsx";
import path from "path";

export default defineConfig({
  e2e: {
    baseUrl: 'http://192.168.1.11:2063/',

    setupNodeEvents(on, config) {

      on("task", {
        readExcel(filePath) {

          const fullPath = path.resolve(filePath);
          const workbook = xlsx.readFile(fullPath);
          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];

          const data = xlsx.utils.sheet_to_json(sheet);

          return data;
        }
      });

      return config;
    },
  },
});