import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature',
  steps: 'steps/*.steps.ts',
});

export default defineConfig({
  testDir,
  reporter: [
    ['html', {outputFolder: 'playwright-report', open: 'always', embedAttachements: true }]
  ],
   use: {
    headless: false,
     baseURL: 'https://www.saucedemo.com',
     screenshot : 'on-first-failure',
     trace: 'on-first-retry',
     //video: 'retain-on-failure',
    
  },
});
