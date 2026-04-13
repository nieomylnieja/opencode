# Fork Notes

## 2026-04-13: permission.ask hook fix (ask-path only)

- Branch: `chore-add-permissions-ask-hook`
- Commit: `e1d699391`
- PR (fork only): [nieomylnieja/opencode#1](https://github.com/nieomylnieja/opencode/pull/1)

### Context

`permission.ask` was not being invoked in the permission flow,
so external policy plugins could not influence prompt-time permission decisions.

### Behavior decision for this fork

- Keep already-allowed tool calls as allowed.
- Invoke `permission.ask` only when the internal rules require `ask`.
- Do not run the hook for requests that are already `allow`.
