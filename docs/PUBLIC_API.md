# Public API Reference

This document defines the public API of `db-ui`. Only items listed here are guaranteed to be stable and available for import.

## Import Syntax

```typescript
// Import components
import { Button, Card, Stack, Text, Input, Modal } from "db-ui";

// Import tokens as a namespace
import { tokens } from "db-ui";
// Usage: tokens.colors, tokens.spacing, etc.

// Import individual token namespaces
import { colors, spacing, typography, radius, elevation } from "db-ui";
```

## Components

### Button
```typescript
import { Button } from "db-ui";

<Button 
  title="Click me" 
  variant="primary" | "secondary"
  disabled={boolean}
  onPress={() => {}}
/>
```

### Card
```typescript
import { Card } from "db-ui";

<Card 
  variant="default" | "elevated" | "outlined"
  elevationLevel="low" | "medium" | "high"
  padding="xs" | "sm" | "md" | "lg" | "xl"
>
  {children}
</Card>
```

### Stack
```typescript
import { Stack } from "db-ui";

<Stack 
  direction="row" | "column"
  gap="xs" | "sm" | "md" | "lg" | "xl"
  align={ViewStyle["alignItems"]}
  justify={ViewStyle["justifyContent"]}
  wrap={boolean}
  reverse={boolean}
>
  {children}
</Stack>
```

### Text
```typescript
import { Text } from "db-ui";

<Text 
  variant="heading" | "body" | "caption"
  color="primary" | "background" | "surface" | "text" | "muted" | "border" | "error" | "success"
>
  {children}
</Text>
```

### Input
```typescript
import { Input } from "db-ui";

<Input 
  variant="default" | "outlined"
  error={boolean}
  value={string}
  onChangeText={(text) => {}}
/>
```

### Modal
```typescript
import { Modal } from "db-ui";

<Modal 
  visible={boolean}
  onClose={() => {}}
  padding="xs" | "sm" | "md" | "lg" | "xl"
  elevationLevel="low" | "medium" | "high"
  animationType="none" | "slide" | "fade"
>
  {children}
</Modal>
```

## Tokens

### Colors
```typescript
import { colors } from "db-ui";
// or
import { tokens } from "db-ui";
// tokens.colors

colors.primary
colors.background
colors.surface
colors.text
colors.muted
colors.border
colors.error
colors.success
```

### Spacing
```typescript
import { spacing } from "db-ui";

spacing.xs  // 4
spacing.sm  // 8
spacing.md  // 12
spacing.lg  // 16
spacing.xl  // 24
```

### Typography
```typescript
import { typography } from "db-ui";

typography.heading  // { fontSize: 20, fontWeight: 600 }
typography.body     // { fontSize: 16, fontWeight: 400 }
typography.caption  // { fontSize: 13, fontWeight: 400 }
```

### Radius
```typescript
import { radius } from "db-ui";

radius.sm  // 4
radius.md  // 8
radius.lg  // 16
```

### Elevation
```typescript
import { elevation } from "db-ui";

elevation.low    // 1
elevation.medium // 3
elevation.high   // 6
```

## Internal APIs

Everything not listed above is **internal** and subject to change without notice:
- `src/screens/` - Internal playground/demo code
- `src/components/index.tsx` - Internal component barrel export
- Component implementation details
- Any file not re-exported through `src/index.ts`

## Type Safety

All components and tokens are fully typed. TypeScript will infer prop types automatically:

```typescript
import { Button } from "db-ui";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Button>;
```

