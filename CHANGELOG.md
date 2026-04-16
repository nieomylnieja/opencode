# Changelog

## Legend

1. [`permission.ask hook fix`](#permissionask-hook-fix)
2. [`permission diff scroll keybinds`](#permission-diff-scroll-keybinds)

## permission.ask hook fix

<https://github.com/nieomylnieja/opencode/pull/1>

### Context

`permission.ask` was not being invoked in the permission flow,
so I wasn't able to hook-in my auto-approve resolver.

### Behavior decision

- Invoke `permission.ask` only when the internal rules require `ask`.
- Do not run the hook for requests that are already `allow`.

### Upstream issues/PRs

- <https://github.com/anomalyco/opencode/pull/20634>

## permission diff scroll keybinds

<https://github.com/nieomylnieja/opencode/pull/2>

### Context

Permission diff scrolling was mouse-only,
which is ridiculous.

### Behavior decision

- Add configurable keybinds `permission_diff_up` and `permission_diff_down`.
- Default those keybinds to `up` and `down`.
- Support scrolling in both minimized and fullscreen permission diff views.

### Upstream issues/PRs

- <https://github.com/anomalyco/opencode/issues/14797>
- <https://github.com/anomalyco/opencode/issues/6901>
