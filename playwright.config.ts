import { defineConfig, devices } from '@playwright/test';
import { environment } from './utils/env';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never',
    }],

    ['junit', {
      outputFile: 'test-results/results.xml',
    }],

    ['list'],
  ],

  use: {
    baseURL: environment.baseUrl,

    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    headless: true,
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});