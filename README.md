# EwalletFrontEnd

## Repo modernization updates

This repository now includes:

- A **GitHub Actions CI pipeline** to install dependencies, build, and smoke-run the service on every push/PR (supports both npm and yarn lockfiles), and gracefully skips build steps when no Node project exists in the repository.
- **Dependabot** configuration to keep npm and GitHub Actions dependencies up to date automatically.

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

> Note: the current repository snapshot does not yet include Angular source files (`package.json` / `angular.json`) in root, so automatic in-repo framework upgrade could not be executed here.
