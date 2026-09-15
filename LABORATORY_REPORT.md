# Chapter 1 Laboratory Report

## Laboratory Title

Establishing a Professional TypeScript, GitHub, and AI-Assisted Development
Workflow

## Repository

- URL: https://github.com/dale-20/student-services-portal
- Primary branch: `main`
- Chapter 1 feature Issue: https://github.com/dale-20/student-services-portal/issues/1
- Chapter 1 feature Pull Request: https://github.com/dale-20/student-services-portal/pull/2
- Compliance branch: `docs/chapter-1-compliance`

## Part 1 - Development Environment

The following versions were verified on September 15, 2026:

| Tool               | Version          |
| ------------------ | ---------------- |
| Git                | 2.55.0.windows.3 |
| Node.js            | 24.18.0          |
| pnpm               | 11.18.0          |
| TypeScript         | 6.0.3            |
| ESLint             | 10.9.1           |
| Prettier           | 3.9.6            |
| Visual Studio Code | 1.136.1, x64     |

The repository uses pnpm as recorded in `package.json`. The editor screenshot and
tool-version screenshot remain manual evidence because they must show the
student's actual environment. The required captures are listed in
`docs/SCREENSHOT-CHECKLIST.md`.

## Parts 2-5 - Project and Initial TypeScript Program

The Node.js project contains `package.json`, `tsconfig.json`, `src/`, and a pnpm
lockfile. TypeScript is installed as a development dependency and strict mode is
enabled. The program defines a `Student` interface, creates sample student data,
formats it, and displays the result.

## Part 6 - Generic API Response

`ApiResponse<T>` keeps the response wrapper reusable while preserving the exact
type of `data`. For example, `ApiResponse<Student>` guarantees a single student
and `ApiResponse<Student[]>` guarantees an array of students. Using `any` would
turn off useful checking for `data`, allowing invalid property access and values
to pass through the compiler without warning.

## Part 7 - Runtime Validation

TypeScript types are checked during development and are erased when the code is
compiled to JavaScript. An interface therefore cannot prove that data received
from an API, file, form, or other external source has the expected runtime shape.
The `isStudent(value: unknown)` type guard checks the required property types and
allowed status values before the program treats the input as a `Student`.

The program demonstrates:

- a valid student;
- an invalid student whose `id` is a string; and
- an invalid student with no `name`.

## Part 8 - ESLint and Prettier

The following project commands are configured:

```text
pnpm run lint
pnpm run format
pnpm run format:check
```

The recorded results are stored in `docs/TERMINAL_RESULTS.md`. A screenshot of
the same commands should be added before final submission.

## Part 9 - `.gitignore` Explanation

| Pattern         | Reason                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------- |
| `node_modules/` | Dependencies can be restored from `package.json` and the lockfile and should not be committed. |
| `dist/`         | Compiled JavaScript is generated from the TypeScript source.                                   |
| `.env`          | Environment files can contain secrets and machine-specific configuration.                      |
| `*.log`         | Log files are generated output and can contain noisy or sensitive diagnostic data.             |

## Parts 10-15 and 21-26 - Git and GitHub Workflow

The repository has an incremental commit history beginning with
`chore: initialize TypeScript project`. Issue #1 contains the student-status
acceptance criteria. Work was developed through the `feature/student-status`
branch and merged through PR #2, which closed Issue #1 and placed the feature on
`main`.

The remote feature branch was deleted after merging, but its commits and branch
name remain visible in PR #2. The compliance work is being performed on
`docs/chapter-1-compliance`. A genuine review from another student or the
instructor is still required before that Pull Request is merged; it cannot be
authored or simulated by the repository owner.

## Parts 16-17 - AI-Assisted Development and Review Form

### AI Tool

OpenAI Codex

### Prompt Used

> Suggest a TypeScript implementation for converting a student's active or
> inactive status into a readable label. Explain the implementation and include
> possible edge cases. Do not use the `any` type.

### Saved AI Recommendation

The AI recommended accepting `unknown` at the runtime boundary and narrowing the
value with a `switch`:

```ts
function formatStudentStatus(status: unknown): string {
  switch (status) {
    case "active":
      return "Active Student";
    case "inactive":
      return "Inactive Student";
    default:
      return "Unknown Student Status";
  }
}
```

The explanation was that `unknown` does not grant permission to use the value
until it has been checked. The two expected literal values are narrowed safely,
while strings such as `"pending"`, `null`, numbers, and missing external values
take the safe fallback path. The implementation does not use `any` or a false
type assertion.

### What I Understood

The function's parameter represents data that may not yet be trusted. Each
`case` compares the input with an allowed literal before returning a label. The
default branch prevents unexpected runtime input from producing an incorrect
student label or throwing an error.

### Recommendation Accepted

The `unknown` parameter, explicit cases, and safe fallback were accepted.

### Recommendation Modified

The function was exported from `src/student.ts` so it could be tested without
executing the demonstration program. Automated cases for active, inactive,
unexpected string, and `null` input were added.

### Recommendation Rejected

The previous approach of writing `"pending" as Student["status"]` was rejected.

### Reason

That assertion makes an invalid value appear valid to the compiler and hides the
very boundary that needs runtime checking. Accepting `unknown` and narrowing it
is clearer and safer.

## Part 19 - Feature Testing

Automated tests cover:

- student formatting;
- active and inactive labels;
- unexpected and null statuses; and
- valid, incorrect-ID, and missing-name runtime-validation cases.

The complete build, test, lint, type-check, format-check, and execution results
are recorded in `docs/TERMINAL_RESULTS.md`.

## Part 20 - Verification of the AI Recommendation

**Claim or code verified:** `unknown` input can be made safe through runtime type
guards and control-flow narrowing, and generics preserve reusable type
information.

**Official sources:**

- [TypeScript Handbook - Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript Handbook - Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [TypeScript Handbook - Everyday Types: Type Assertions](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-assertions)

**Result:** Verified. Type guards refine broader values into more specific types,
generics allow reusable components to retain their value types, and type
assertions do not add runtime validation.

## Laboratory Reflection

### 1. What was the most important difference between your previous programming workflow and the Git/GitHub workflow used in this laboratory?

The most important difference was that work became a traceable sequence rather
than a collection of file changes. Git commits recorded why each change was
made, while GitHub connected the Issue, branch, discussion, and merged result.
This structure makes it easier to understand, review, and recover earlier work.

### 2. Why was the feature branch useful?

The feature branch isolated the student-status work from the stable main branch.
It allowed several related commits to be reviewed together in a Pull Request.
It also provided a safe place to revise the unexpected-status behavior before
merging.

### 3. Did the AI provide any suggestion that required modification? Explain.

Yes, the recommendation was adapted to fit the repository's structure and
testing needs. The formatter was placed in an exported module instead of being
left inside a demonstration-only script. Automated tests were added so the
accepted behavior could be verified repeatedly rather than trusted by inspection.

### 4. How did TypeScript help detect or prevent a possible problem?

TypeScript restricts a valid student's status to `"active"` or `"inactive"` and
checks the types of every required property. It would reject assigning a string
to the numeric `id` field in typed code. Strict checking also makes missing or
possibly undefined values visible before the program runs.

### 5. Why was runtime validation still necessary?

External values do not become trustworthy merely because an interface exists in
the source code. API responses and parsed data can contain the wrong types or
omit required properties at runtime. The `isStudent` guard checks those values
before the program relies on the `Student` contract.

### 6. What information should never be placed in the repository?

Passwords, API keys, access tokens, private keys, and real `.env` secrets should
never be committed. Personally identifiable or confidential student information
must also stay out of a public repository. If a secret is committed, deleting
the latest file is insufficient because the value may remain in Git history and
should be rotated immediately.

### 7. Which step of Ask -> Understand -> Review -> Modify -> Test -> Verify -> Commit was the most important to you? Explain your answer.

Verification was the most important step because plausible code is not the same
as correct code. Tests showed the runtime behavior, while official documentation
confirmed the TypeScript concepts behind the implementation. Verification gave
the commit evidence instead of relying on the confidence of an AI response.

### 8. How could this workflow improve a group software-development project?

Issues give the group a shared definition of the work and its acceptance
criteria. Branches and Pull Requests let teammates review changes without
destabilizing `main`. Meaningful commits, automated checks, and AI disclosure
make collaboration more transparent and reduce the cost of finding mistakes.

## Deliverable Status

| Deliverable                                                       | Status                                |
| ----------------------------------------------------------------- | ------------------------------------- |
| Repository URL                                                    | Complete                              |
| Development-environment screenshot                                | Manual capture pending                |
| README and configuration files                                    | Complete                              |
| TypeScript and runtime-validation examples                        | Complete                              |
| Issue, feature history, commits, and merged PR                    | Complete                              |
| Automated checks                                                  | Complete; screenshot pending          |
| AI prompt, response, review, explanation, and verification source | Complete                              |
| Reflection                                                        | Complete                              |
| Independent code-review evidence                                  | Pending another student or instructor |
