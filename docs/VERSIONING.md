# Versioning Discipline

This document defines the semantic versioning (semver) rules for `db-ui`.

## Version Format

`MAJOR.MINOR.PATCH` (e.g., `1.2.3`)

## Semver Rules

### PATCH (x.x.PATCH) - Style & Bug Fixes
- **Visual changes only** (colors, spacing, typography adjustments)
- **Bug fixes** that don't change API
- **Internal refactoring** with no user-facing changes
- **Documentation updates**
- **Performance improvements** with no API changes

**Examples:**
- Changing `colors.primary` from `#A076F9` to `#A177FA`
- Fixing a button's disabled state styling
- Improving component render performance
- Updating token values

### MINOR (x.MINOR.x) - New Features & Props
- **Adding new props** to existing components
- **Adding new components** to the public API
- **Adding new tokens** (colors, spacing, etc.)
- **New component variants** (e.g., adding `tertiary` to Button)
- **Non-breaking API additions**

**Examples:**
- Adding `size` prop to Button component
- Adding new `TextInput` component
- Adding `colors.warning` token
- Adding `variant="tertiary"` to Button

### MAJOR (MAJOR.x.x) - Breaking Changes
- **Removing props** from components
- **Removing components** from public API
- **Removing tokens** from public API
- **Changing prop types** in incompatible ways
- **Renaming components or tokens**
- **Changing default behavior** of components

**Examples:**
- Removing `variant` prop from Button
- Renaming `Card` to `Surface`
- Changing `ButtonProps` to require `onPress` instead of optional
- Removing `colors.muted` token
- Changing default `Stack` direction from `column` to `row`

## Public API Boundary

**Only exports from `src/index.ts` are part of the public API.**

- ✅ Safe to change: Anything not exported from `src/index.ts`
- ⚠️ Requires version bump: Changes to exports in `src/index.ts`
- ❌ Breaking change: Removing or renaming exports from `src/index.ts`

## Migration Strategy

When making breaking changes:
1. Document the change in CHANGELOG.md
2. Provide migration guide if needed
3. Consider deprecation warnings before removal (in future versions)

## Current Version

`1.0.0` - Initial public API definition

