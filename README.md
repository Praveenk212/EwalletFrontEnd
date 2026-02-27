# EwalletFrontEnd

## Repo modernization updates

This repository now includes:

- A **GitHub Actions CI pipeline** to install dependencies, build, and smoke-run the service on every push/PR.
- **Dependabot** configuration to keep npm and GitHub Actions dependencies up to date automatically.

## Branch sync guidance

If your latest code is currently on `master`, open a PR from `master` to `main` so `main` becomes the up-to-date default branch history.

Recommended flow:

1. Create a new branch from `master`.
2. Merge `main` into that new branch.
3. Open a PR from the new branch to `main`.

### Angular version updates

If this is an Angular app and you want to move to the latest stable Angular release, run:

```bash
npx @angular/cli@latest update @angular/core@latest @angular/cli@latest
```

Then validate locally:

```bash
npm install
npm run build
npm run start
```
