# aws-playwright-cicd

[![CI](https://github.com/Oheri99/aws-playwright-cicd/actions/workflows/playwright.yml/badge.svg)](https://github.com/Oheri99/aws-playwright-cicd/actions/workflows/playwright.yml)
[![CodeBuild](https://img.shields.io/badge/AWS-CodeBuild-blue?logo=amazonaws)](buildspec.yml)

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

This project includes two CI paths:

- GitHub Actions: [.github/workflows/playwright.yml](.github/workflows/playwright.yml)
- AWS CodeBuild: [buildspec.yml](buildspec.yml)

Both run the same validation flow: install dependencies, install browsers, type-check, and execute the Playwright suite.

## Project structure

- `tests/` — Playwright test files
- `pages/` — page object models
- `utils/` — helper utilities
- `playwright.config.ts` — Playwright configuration
- `tsconfig.json` — TypeScript configuration
- `buildspec.yml` — AWS CodeBuild pipeline definition
