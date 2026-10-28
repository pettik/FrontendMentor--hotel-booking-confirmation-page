# GitHub Copilot Instructions

## Commit Message Guidelines

When generating Git commit messages, follow these rules:

- Always write commit messages in English.
- Use the Conventional Commits format: `type: short description`.
- Describe the actual purpose of the changes, not just the filenames.
- Never generate generic commit messages such as:
  - `Update style.css`
  - `Update script.js`
  - `Update index.html`
  - `Fix code`
  - `Various changes`
- Keep the subject concise, specific, and written in the imperative mood.
- Prefer one logical change per commit.

### Commit types

- `feat:` New functionality.
- `fix:` Bug fixes, including accessibility and responsive layout issues.
- `refactor:` Code restructuring without changing behavior.
- `style:` Formatting or other non-functional code style changes.
- `docs:` Documentation changes.
- `chore:` Maintenance tasks.

### Examples

Bad: `Update style.css`

Good: `fix: improve sidebar layout on mobile`

Bad: `Update script.js`

Good: `fix: prevent keyboard focus on hidden sidebar`

Bad: `Update README.md`

Good: `docs: clarify project setup instructions`

Generate commit messages based on the actual Git diff.
