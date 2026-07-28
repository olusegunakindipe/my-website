# Commit message examples

Valid under `.husky/commit-msg` → commitlint conventional config.

## Good

```text
feat(chat): fall back to current Gemini free-tier models
```

```text
fix(header): highlight active section from scroll position
```

```text
docs(agents): document Sanity article workflow
```

```text
chore(ci): pin release-please config paths
```

```text
feat(articles)!: require cover image on all posts

BREAKING CHANGE: posts without a cover image are excluded from queries.
```

## Bad (will fail commitlint or confuse release-please)

```text
Header fixes
```

```text
Fixed stuff
```

```text
feat: Added the new related posts feature and also updated styles and fixed typos
```

(Subject too long / not imperative / stacks unrelated work.)

## Mapping change → type

| Change                              | Type               |
| ----------------------------------- | ------------------ |
| New user-facing capability          | `feat`             |
| Bug fix                             | `fix`              |
| Docs / AGENTS / README only         | `docs`             |
| Formatting only                     | `style` or `chore` |
| Internal restructure, same behavior | `refactor`         |
| Dependencies / tooling              | `build` or `chore` |
| GitHub Actions                      | `ci`               |
