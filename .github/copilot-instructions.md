## Repo overview

This is a small React + TypeScript application scaffolded for Vite located under `character-counter/`.
Key runtime is Vite + React; TypeScript project references live in `tsconfig.app.json`.

## Big picture

- App root: `character-counter/src/main.tsx` mounts `<App />`.
- Main feature: `CharacterCounter` (in `src/components/CharacterCounter/CharacterCounter.tsx`) holds the text state, computes `TextStats` via `useMemo`, and composes `TextInput` + `StatsDisplay`.
- Data flow: parent (`CharacterCounter`) manages `text` and passes an `onTextChange: (text:string) => void` callback to `TextInput`; `StatsDisplay` is pure presentation that renders counts and progress from a `TextStats` object defined in `src/types/index.ts`.

## Dev workflows (concrete commands)

- Install deps: `npm install` (run from `character-counter/` if you open that folder).
- Run dev server: `npm run dev` — uses Vite (`vite` script in `package.json`).
- Build: `npm run build` — runs `tsc -b && vite build` (note the `tsc -b` step).
- Preview build: `npm run preview`.
- Lint: `npm run lint` runs `eslint .`.

There are no test scripts configured in `package.json`.

## Project-specific conventions & patterns

- Component layout: each component lives in `src/components/<ComponentName>/` with the component file named `<ComponentName>.tsx` (e.g. `TextInput/TextInput.tsx`).
- Types are centralized in `src/types/index.ts`. Use the exported interfaces (`TextInputProps`, `TextStats`, `StatsDisplayProps`, `CharacterCounterProps`) when adding or editing components.
- State lifting pattern: keep primary state in parent components (see `CharacterCounter`), children receive callbacks (`onTextChange`) and do not hold authoritative state.
- React hooks: prefer `useCallback` for event handlers and `useMemo` for derived values (see `CharacterCounter` `handleTextChange` and `stats`).
- Styling: component markup uses utility-like class names (e.g. `bg-gray-50`, `rounded-lg`) but the repo only contains a simple `src/index.css` — do not assume Tailwind is configured unless you add it and update `package.json`.

## Key files to open when working here

- `character-counter/package.json` — scripts and deps (`dev`, `build`, `lint`, `preview`).
- `character-counter/vite.config.ts` — Vite config and React plugin.
- `character-counter/tsconfig.app.json` — TypeScript options used during build.
- `character-counter/src/components/CharacterCounter/CharacterCounter.tsx` — parent state + stats logic.
- `character-counter/src/components/TextInput/TextInput.tsx` — event/callback pattern example.
- `character-counter/src/components/StatsDisplay/StatsDisplay.tsx` — presentation + formatting helper (`formatReadingTime`).

## Concrete examples to follow

1. Emit events from child to parent:

```ts
// TextInput
export const TextInput: React.FC<TextInputProps> = ({ onTextChange }) => {
  return <textarea onChange={(e) => onTextChange(e.target.value)} />;
};
```

2. Compute derived stats in parent with `useMemo`:

```ts
const stats = useMemo(() => { /* compute wordCount, charCount, readingTime */ }, [text]);
```

## When to ask for clarification

- If you need to add a global CSS system (e.g. Tailwind), state where styles should live and update `package.json` and `index.css` accordingly.
- If adding tests, propose a runner (Vitest / Jest) and a small test for `StatsDisplay` or the stats computation in `CharacterCounter`.

## Notes for Copilot/GitHub AI agents

- Preserve the parent/child state pattern — do not move state into `TextInput` unless you refactor `CharacterCounter`.
- Follow the existing file and naming conventions when adding files (component folder + same-named file).
- Use the TypeScript interfaces in `src/types/index.ts` for props and data shapes.

---
If any of these sections are unclear or you want me to include additional examples (e.g. how to add Tailwind or tests), tell me which area to expand.
