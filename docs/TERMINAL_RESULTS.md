# Chapter 1 Terminal Results

Verification date: September 15, 2026

## Environment

```text
git version 2.55.0.windows.3
node v24.18.0
pnpm 11.18.0
TypeScript 6.0.3
ESLint 10.9.1
Prettier 3.9.6
Visual Studio Code 1.136.1 x64
```

## TypeScript Check

Command:

```text
pnpm run typecheck
```

Result:

```text
> tsc --noEmit
Exit code: 0
```

## Automated Tests

Command:

```text
pnpm test
```

Result:

```text
> tsc && node --test test/*.test.mjs
PASS formats a student
PASS formats active and inactive status labels
PASS handles unexpected status values safely
PASS validates unknown student data
tests 4
pass 4
fail 0
```

The audit sandbox initially blocked Node from spawning its test worker with
`EPERM`. The same command passed when executed with normal process permissions;
this was an environment restriction, not a failed assertion.

## ESLint

Command:

```text
pnpm run lint
```

Result:

```text
> eslint .
Exit code: 0
```

## Prettier

Command:

```text
pnpm run format:check
```

Result:

```text
> prettier --check .
Checking formatting...
All matched files use Prettier code style!
Exit code: 0
```

## Program Execution

Command:

```text
pnpm start
```

Selected verified output:

```text
1 - Cristian Dale Laureto (active)
Valid student: true
Invalid ID: false
Missing name: false
Active Student
Inactive Student
Unexpected status: Unknown Student Status
Exit code: 0
```
