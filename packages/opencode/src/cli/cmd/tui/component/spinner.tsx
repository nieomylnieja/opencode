import { createEffect, createMemo, createSignal, onCleanup, Show } from "solid-js"
import { useTheme } from "../context/theme"
import { useKV } from "../context/kv"
import type { JSX } from "@opentui/solid"
import type { RGBA } from "@opentui/core"
import "opentui-spinner/solid"
import { Locale } from "@/util"

const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"]

export function Spinner(props: { children?: JSX.Element; color?: RGBA; start?: number; showElapsed?: boolean }) {
  const { theme } = useTheme()
  const kv = useKV()
  const [now, setNow] = createSignal(Date.now())
  const mountedAt = Date.now()
  const color = () => props.color ?? theme.textMuted

  createEffect(() => {
    if (!props.showElapsed) return
    setNow(Date.now())
    const timer = setInterval(() => {
      setNow(Date.now())
    }, 250)

    onCleanup(() => {
      clearInterval(timer)
    })
  })

  const elapsed = createMemo(() => {
    if (!props.showElapsed) return ""
    return Locale.duration(Math.max(0, now() - (props.start ?? mountedAt)))
  })

  return (
    <Show
      when={kv.get("animations_enabled", true)}
      fallback={
        <text fg={color()}>
          ⋯<Show when={props.children}> {props.children}</Show>
          <Show when={elapsed()}> {elapsed()}</Show>
        </text>
      }
    >
      <box flexDirection="row" gap={1}>
        <spinner frames={frames} interval={80} color={color()} />
        <Show when={props.children}>
          <text fg={color()}>{props.children}</text>
        </Show>
        <Show when={elapsed()}>
          <text fg={color()}>{elapsed()}</text>
        </Show>
      </box>
    </Show>
  )
}
