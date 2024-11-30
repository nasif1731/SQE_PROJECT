# Test Automation Project

## Overview

This project demonstrates a basic test automation framework for a JavaScript application using Mocha, Chai, Docker, and GitHub Actions for Continuous Integration and Continuous Deployment (CI/CD). The main goal is to automate unit tests and run them within a containerized environment to ensure consistency across different platforms.

## Features

- **Test Automation**: Unit tests for basic calculator operations (addition, subtraction, multiplication).
- **Docker**: Dockerized application for consistent environments across local and CI systems.
- **CI/CD Pipeline**: GitHub Actions workflow for automatic testing on each push or pull request.
- **Test Framework**: Mocha for testing, Chai for assertions.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Docker installed on your machine to build and run containers.
- Node.js (v16 or higher) installed for running the application and tests.
- A GitHub repository set up with the CI/CD workflow (GitHub Actions).
- An IDE or text editor of your choice (VS Code, Atom, etc.)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nasif1731/SQE_PROJECT.git
   cd SQE_PROJECT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Build and run Docker container**:
   ```bash
   docker build -t test-automation .
   docker run test-automation
   ```

4. **Run tests locally**:
   ```bash
   npm test
   ```

## Directory Structure

```plaintext
SQE_PROJECT/
├── Dockerfile
├── .github/
│   └── workflows/
│       └── ci.yml
├── node_modules/
├── test/
│   └── calculator.test.mjs
├── package.json
└── README.md
```

- **Dockerfile**: Docker configuration to build and run the application inside a container.
- **.github/workflows/ci.yml**: GitHub Actions CI/CD pipeline configuration.
- **test/**: Contains all test cases, currently includes `calculator.test.mjs` for testing basic calculator functions.
- **package.json**: Project configuration including dependencies for Mocha, Chai, etc.

## GitHub Actions CI/CD

This project includes a CI/CD pipeline configured through GitHub Actions. The pipeline automatically runs the tests every time a change is pushed to the `main` branch or a pull request is created.

### Workflow File
The workflow file (`ci.yml`) is located under `.github/workflows/` and contains the following steps:

1. Set up the Node.js environment.
2. Install project dependencies.
3. Run tests using Mocha.

Example workflow snippet:

```yaml
name: Node.js CI

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Install dependencies
        run: npm install

      - name: Modify permissions of Mocha binary
      run: chmod +x ./node_modules/.bin/mocha

      - name: Run tests
        run: npm test
```

## Running Tests

The tests are run using **Mocha** and **Chai**. To run the tests locally, simply run the following command:

```bash
npm test
```

## Docker

A **Dockerfile** is provided to containerize the application, ensuring it runs the same way in any environment. To build and run the Docker container, use:

```bash
docker build -t test-automation .
docker run test-automation
```

## Contribution

If you'd like to contribute to this project, please fork the repository and create a pull request with your changes. Ensure that you write tests for any new features or fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
