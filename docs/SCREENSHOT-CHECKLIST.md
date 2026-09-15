# Chapter 1 Screenshot Checklist

The following evidence must be captured from the student's real environment.
Do not fabricate, reconstruct, or edit terminal output for submission.

## Required screenshots

1. Development environment
   - Show the project open in the approved editor.
   - Show the integrated terminal and project files.
2. Installed tool versions
   - Run `git --version`, `node --version`, and `pnpm --version`.
3. Quality checks
   - Run `pnpm run typecheck`, `pnpm test`, `pnpm run lint`, and
     `pnpm run format:check`.
4. Git and GitHub workflow
   - Show the remediation branch and clean `git status`.
   - Show the linked Issue and Pull Request.
   - Show a meaningful review submitted by another student or the instructor.
   - Show the merge and completed Issue after approval.

Save the images in `docs/evidence/` using descriptive filenames such as
`01-development-environment.png` and `02-quality-checks.png`. Before submission,
replace the checklist references in the laboratory report with links to the
actual images.
