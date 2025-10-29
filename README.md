# vdi-smoke-tests-poc

A proof of concept repository for running Playwright smoke tests with Chrome browser.

## Features

- **Playwright Tests**: Automated browser tests using Playwright
- **Chrome Browser**: Tests run in Chromium/Chrome browser
- **Sample Tests**:
  - `launch-chrome.spec.js`: Opens google.com and verifies the page loads
  - `hello-world.spec.js`: A simple test that prints "Hello World"
- **HTML Test Reports**: Generates detailed HTML reports of test results
- **GitHub Actions**: Automated testing on self-hosted runners

## Prerequisites

- Node.js 20 or higher
- npm

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install chromium --with-deps
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in UI mode (interactive):
```bash
npx playwright test --ui
```

Run a specific test file:
```bash
npx playwright test tests/hello-world.spec.js
```

## View Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## GitHub Actions

The repository includes a GitHub Actions workflow that runs tests on a self-hosted runner. The workflow:

- Triggers on push to main/master branches
- Triggers on pull requests
- Can be manually triggered via workflow_dispatch
- Installs dependencies and browsers
- Runs all tests
- Uploads test reports as artifacts

## Project Structure

```
.
├── .github/
│   └── workflows/
│       └── playwright.yml    # GitHub Actions workflow
├── tests/
│   ├── hello-world.spec.js   # Hello World test
│   └── launch-chrome.spec.js      # google.com test
├── playwright.config.js       # Playwright configuration
├── package.json              # Project dependencies
└── README.md                 # This file
```

## Configuration

The Playwright configuration (`playwright.config.js`) includes:

- Test directory: `./tests`
- Browser: Chromium (Chrome)
- Reporters: HTML and List
- Screenshots on failure
- Trace on retry



#Dummy change 
1
2
3
