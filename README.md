# University Student Services Portal

## Project Description

The University Student Services Portal is a TypeScript project created to
demonstrate a professional web-development workflow. This first chapter focuses
on project setup and typed student-service examples rather than a complete web
application.

This project demonstrates the use of TypeScript, Git, GitHub, ESLint,
Prettier, feature branches, Pull Requests, and responsible
AI-assisted development.

## Requirements

The following software is required:

- Node.js
- pnpm
- TypeScript
- Git
- GitHub account
- Visual Studio Code or another approved code editor

## Installation Instructions

Clone the repository:

```bash
git clone https://github.com/dale-20/student-services-portal.git
cd student-services-portal
pnpm install
```

## How to Run the Project

Compile and run the program:

```bash
pnpm run build
pnpm start
```

Run the automated tests:

```bash
pnpm test
```

Run TypeScript checks without generating output:

```bash
pnpm run typecheck
```

## How to Run Linting

```bash
pnpm run lint
```

## How to Format Code

Apply Prettier formatting:

```bash
pnpm run format
```

Check formatting without changing files:

```bash
pnpm run format:check
```

## Development Workflow

1. Create or select a GitHub Issue with clear acceptance criteria.
2. Create a feature branch from `main`.
3. Implement a focused change and review the diff.
4. Run type-checking, tests, linting, and formatting.
5. Commit with a meaningful conventional message and push the branch.
6. Open a Pull Request that links the Issue and records testing and AI usage.
7. Request review from another student or the instructor, revise as needed, and
   merge only after approval.

## AI Usage Policy

AI tools may be used to assist development. All AI-generated suggestions must be
understood, reviewed, modified when necessary, tested, and verified against
official documentation before they are committed. AI use must be disclosed in
the laboratory report and Pull Request, including recommendations that were
accepted, modified, or rejected. AI output must never be treated as a substitute
for the student's own explanation or for a genuine human code review.

## Laboratory Documentation

The Chapter 1 evidence and reflection are recorded in
[`LABORATORY_REPORT.md`](LABORATORY_REPORT.md). The remaining manual evidence is
listed in [`docs/SCREENSHOT-CHECKLIST.md`](docs/SCREENSHOT-CHECKLIST.md).
