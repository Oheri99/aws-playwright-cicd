# aws-playwright-cicd

A Playwright + TypeScript automation project for running browser tests in local development and CI pipelines.

## Prerequisites

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Run tests

```bash
npm test
```

Run headed mode:

```bash
npm run test:headed
```

Open the HTML report:

```bash
npm run test:report
```

## Environment variables

Copy `.env.example` to `.env` and update values if needed:

```bash
cp .env.example .env
```

Example:

```env
BASE_URL=https://www.saucedemo.com
TEST_USERNAME=standard_user
TEST_PASSWORD=secret_sauce
HEADLESS=true
PLAYWRIGHT_RETRIES=0
PLAYWRIGHT_WORKERS=1
```

## CI

This project includes a CodeBuild configuration in `buildspec.yml` for running tests in AWS CodeBuild.

## Project structure

- `tests/` — Playwright test files
- `pages/` — page object models
- `utils/` — helper utilities
- `playwright.config.ts` — Playwright configuration
- `tsconfig.json` — TypeScript configuration
- `buildspec.yml` — AWS CodeBuild pipeline definition
