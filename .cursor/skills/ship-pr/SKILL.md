---
name: ship-pr
description: >-
  Run this repo's git ship workflow: never commit on main; create a feature
  branch from main, conventional commits that pass Husky commitlint, pre-commit
  lint-staged, push the feature branch, and open a GitHub PR into main via gh.
  Use when the user asks to commit, open/create a PR, push a branch, ship
  changes, or prepare a pull request description.
---

# Ship PR

End-to-end workflow for commits and pull requests in this repository.

## Hard rules

- Only commit when the user explicitly asks.
- Only push / create a PR when the user explicitly asks.
- **Never commit on `main`, `release`, or `develop`.** Always use a feature branch.
- **Never push to `main`, `release`, or `develop`.** Push the feature branch only.
- Never update git config.
- Never use `--no-verify`, `--no-gpg-sign`, or interactive flags (`-i`).
- Never force-push `main` or `release`. Warn before any force-push.
- **Before every push:** sync with latest `origin/main` via **rebase** (preferred) unless the user asks for a merge.
- On rebase/merge conflicts: keep the **feature branch’s recent intentional changes**; only take `main` where the branch has no opinion.
- After a rebase of a branch that was already pushed, use `git push --force-with-lease` (never `--force`).
- Never amend unless the user asked, HEAD was created by you in this session, and the commit is not pushed.
- If commitlint or a hook rejects a commit, fix the message/files and create a **new** commit (do not amend a failed commit).
- Do not commit secrets (`.env.local`, credentials, API keys).
- Do **not** push until the user explicitly asks to push.

## Repo gates (must pass)

These match local Husky hooks and GitHub Actions CI (`.github/workflows/ci.yml`):

| Gate               | Mechanism                                                              |
| ------------------ | ---------------------------------------------------------------------- |
| Staged file format | `.husky/pre-commit` → `lint-staged` (Prettier + ESLint)                |
| Commit message     | `.husky/commit-msg` → `commitlint` (`@commitlint/config-conventional`) |
| CI on PR / push    | `npm run lint` + `npm run prettier:check` (Node 20)                    |
| Releases           | Conventional commits on merge to `main` feed `release-please`          |

CI triggers on PRs targeting `main`, `develop`, or `release`. Default PR base is **`main`**.

## Branching (required before every commit)

1. Check the current branch first:

   ```bash
   git branch --show-current
   git status
   ```

2. If the branch is `main`, `release`, or `develop`:
   - **Do not commit.**
   - Create and switch to a new branch from up-to-date `main`:

   ```bash
   git fetch origin main
   git checkout main
   git pull origin main
   git checkout -b feat/short-slug
   ```

   Choose type from the change: `feat/`, `fix/`, `chore/`, `docs/`, `ci/`, `refactor/`.

3. If already on a feature branch, proceed with the commit workflow on that branch.
4. Never commit “just this once” on `main` even if the user is in a hurry. Create the branch, then commit. If the user explicitly demands a main commit, refuse and explain the PR workflow.

## Commit workflow

Only after confirming HEAD is **not** `main` / `release` / `develop`.

Run in parallel before drafting the message:

```bash
git branch --show-current
git status
git diff
git diff --staged
git log --oneline -8
```

Then:

1. Stage only relevant files (`git add <paths>`). Avoid blanket `git add .` unless the user wants everything.
2. Draft a **Conventional Commits** message (subject ≤ 72 chars):

   ```text
   type(scope)?: subject

   optional body explaining why
   ```

   Allowed types (commitlint conventional): `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

   - `feat:` → minor release (release-please)
   - `fix:` → patch release
   - `feat!:` / `BREAKING CHANGE:` → major
   - Prefer imperative subject: `add`, `fix`, `update` (not `added`)
   - Match recent `git log` tone when reasonable

3. Commit with HEREDOC:

   ```bash
   git commit -m "$(cat <<'EOF'
   feat(articles): add related posts by category

   EOF
   )"
   ```

4. Run `git status` after commit. If Husky fails, read the error, fix, and commit again.

More examples: [commit-examples.md](commit-examples.md)

## Sync with main before push (required)

When the user asks to push (or open a PR that needs an up-to-date branch):

1. Ensure the working tree is clean (commit or stash first).
2. Fetch and rebase onto latest `main`:

   ```bash
   git fetch origin main
   git rebase origin/main
   ```

3. If conflicts occur:
   - Open each conflicted file.
   - Prefer the **feature branch** version for files this branch intentionally changed.
   - Prefer `main` only for unrelated upstream fixes the branch never touched.
   - `git add` resolved files, then `git rebase --continue`.
   - To abort: `git rebase --abort`.
4. Push:

   ```bash
   git push -u origin HEAD
   ```

   If the rebase rewrote commits that were already on the remote:

   ```bash
   git push --force-with-lease origin HEAD
   ```

Prefer rebase over merge for feature branches so history stays linear for PRs.

## Pull request workflow

Only after the user asks to open/create a PR. The PR must be **from the feature branch → `main`** (or another base the user names). Never open a PR that pushes commits onto `main` directly.

1. Confirm branch is not protected:

   ```bash
   git branch --show-current
   ```

   If on `main` / `release` / `develop`, stop and create a feature branch first (see Branching).

2. Gather state in parallel:

   ```bash
   git status
   git diff
   git diff --staged
   git branch -vv
   git log --oneline main..HEAD
   git diff main...HEAD
   ```

3. Run the same checks CI will run (required before opening the PR when practical):

   ```bash
   npm run lint
   npm run prettier:check
   ```

   Fix failures before pushing / opening the PR.

4. Rebase onto latest `origin/main` (see **Sync with main before push**), resolve conflicts favoring this branch’s recent changes, then push the **feature branch** only (`--force-with-lease` if rebased).

5. Create the PR with `gh` into **`main`**. The body **must** include a brief bullet list of what changed so reviewers can scan it quickly:

   ```bash
   gh pr create --base main --title "feat(articles): add related posts by category" --body "$(cat <<'EOF'
   ## Summary
   - Brief bullet of change 1
   - Brief bullet of change 2
   - Brief bullet of change 3 (if needed)

   EOF
   )"
   ```

6. PR title: same conventional style as the primary commit when possible. Do not stuff every feature into the title.
7. Return the PR URL when done.

### PR body rules

- **Always include a Summary** as a short bullet list (typically 2–5 items) of what changed or was updated.
- Write for reviewers: each bullet should be understandable without opening the diff (what changed + why it matters).
- Keep bullets brief; prefer outcomes over file paths (`Make Ask AI fullscreen on mobile` not `Edited SiteAssistant.tsx`).
- Do **not** add a recurring Test plan section (`lint`, `prettier:check`, generic page checks, etc.). Run those locally / rely on CI; keep them out of the PR body.
- Only add extra sections when the user asks, or when a one-off note is truly specific to this change.
- Do not put secrets in the PR body.
- When the user asks to **commit and open a PR**, do both: commit, sync/push, then open the PR with this Summary list.
- The repo includes `.github/PULL_REQUEST_TEMPLATE.md` so GitHub’s web “Create pull request” form also starts with a Summary list. Prefer filling real bullets (agent or human); don’t leave empty placeholders.

## Progress checklist

Copy and update while shipping:

```text
Ship progress:
- [ ] Confirmed not on main/release/develop
- [ ] Feature branch created from main (if needed)
- [ ] Changes reviewed (status + diff + log)
- [ ] Files staged (no secrets)
- [ ] Conventional commit created (Husky passed)
- [ ] npm run lint + prettier:check passed
- [ ] Rebased onto latest origin/main (conflicts → prefer branch)
- [ ] Feature branch pushed (force-with-lease if rebased)
- [ ] PR opened into main with brief Summary bullet list
- [ ] PR URL reported to user
```
