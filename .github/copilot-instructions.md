# Copilot Instructions

## Tech Stack
- Engine & package manager: Deno
- Builder: Vite
- Testing: Vitest
- Framework: SvelteKit (Svelte 5 with Runes)
- Styling: TailwindCSS
- Language: TypeScript
- Icons: Lucide Icons

## Design Guidelines
- Use a minimalist black and white aesthetic.
- Maintain circular design elements that follow the golden ratio (1:1.618) for visual harmony.
- Ensure responsive design using viewport units (`vw`, `vh`).
- Use "Andale Mono" font for numbers.

## Component Structure
- Use `<script lang="ts">` with Svelte 5 runes (`$props`, `$state`).
- Prefer composition with small, reusable components in `src/lib/components`.
- Use functional HTML attributes (e.g., `onclick` instead of `on:click`).

## Coding Standards
- Keep components typed.
- Spread `...rest` props on root elements of UI components to allow flexibility (e.g. `style`, `class` merging).
- Use Semantic HTML where possible (`button` for interactions).

## Making Changes
- When making changes, check the edited files for errors or inconsistencies.
