# Changelog

## Legend

1. [`permission.ask hook fix`](#permissionask-hook-fix)

## permission.ask hook fix

https://github.com/nieomylnieja/opencode/pull/1

### Context

`permission.ask` was not being invoked in the permission flow,
so I wasn't able to hook-in my auto-approve resolver.

### Behavior decision

- Invoke `permission.ask` only when the internal rules require `ask`.
- Do not run the hook for requests that are already `allow`.

### Upstream issues/PRs

- <https://github.com/anomalyco/opencode/pull/20634>
