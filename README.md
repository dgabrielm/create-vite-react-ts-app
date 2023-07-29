# Vite React template

## Quick Start
create .env.local with the following contents: `VITE_EXAMPLE_ENVIRONMENT_VARIABLE = "hello world"`
then run
`npm ci`
`npm run dev`

If you install any new dependencies during development use `npm i` and make sure to commit the new package-lock.json

## Template features
- vite project with typescript and react
- eslint configuration and vscode recommendation
- husky pre-commit hooks, enforces before commit:
  - unit test pass
  - eslint pass
  - commit lint (enforces commit messages adhere to [https://www.conventionalcommits.org/en/v1.0.0/][conventional commits])
- vitest pre-configured, with example unit tests
- automatic aliasing of all paths declared in `tsconfig.json`, this includes inside scss files
- storybook pre-configured to work with vite, with example story
- vite environment variable example
- CSS reset in globals.scss
- basic scss theme example