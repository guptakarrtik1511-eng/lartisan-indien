# Contributing to L’Artisan Indien

Thanks for contributing.

## Prerequisites

- Node.js 20+
- npm

## Local setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the app:

   ```bash
   npm run dev
   ```

3. Run lint checks before opening a pull request:

   ```bash
   npm run lint
   ```

## Branch and commit workflow

1. Create a branch from `main`.
2. Keep changes focused to one task.
3. Write clear commit messages.
4. Rebase or merge `main` before opening your PR if needed.

## Pull request checklist

- [ ] My changes are scoped and focused.
- [ ] I ran `npm run lint`.
- [ ] I tested the affected user flow locally.
- [ ] I updated docs if behavior or usage changed.
- [ ] I filled out the PR template.

## Code style

- Use existing TypeScript and React patterns in the codebase.
- Reuse data and helper utilities from `/lib` where possible.
- Keep components small and readable.
