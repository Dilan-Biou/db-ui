# UI Primitives

This document describes the core UI primitives available in the design system and how to use them. These components are designed to be **simple, composable, and predictable**, and serve as the foundation for building higher-level features.

---

## Philosophy

- **Controlled components first** (explicit `value`, `onChange`)
- **Token-based styling** (colors, spacing, radius, elevation)
- **Minimal but extensible APIs**
- **React Native–native** (no magic, no DOM assumptions)

---

## Text

The `Text` component is a styled wrapper around React Native's `Text` with variants and color tokens. It extends all standard `TextProps` from React Native.

### Usage

```tsx
<Text>Default body text</Text>
<Text variant="heading">Heading text</Text>
<Text variant="caption">Caption text</Text>
<Text color="primary">Primary text</Text>
<Text color="error">Error text</Text>
<Text color="success">Success text</Text>
<Text color="muted">Muted text</Text>
```

### Props

- `variant`: `"body" | "heading" | "caption"` (default: `"body"`)
- `color`: `"primary" | "error" | "success" | "muted" | "text" | "background" | "surface" | "border"` (default: `"text"`)
- `style`: Optional custom styles (extends `TextProps["style"]`)
- All standard React Native `TextProps` are supported

---

## Button

Buttons support variants, disabled state, and loading-friendly patterns. It extends all standard `TouchableOpacityProps` from React Native.

### Usage

```tsx
<Button title="Primary" onPress={handlePress} />
<Button title="Secondary" variant="secondary" onPress={handlePress} />
<Button title="Disabled" disabled onPress={handlePress} />
```

### Props

- `title`: `string` (required) - The button label text
- `variant`: `"primary" | "secondary"` (default: `"primary"`)
- `disabled`: `boolean` (default: `false`)
- `onPress`: `() => void` - Handler for button press
- `style`: Optional custom styles (extends `TouchableOpacityProps["style"]`)
- All standard React Native `TouchableOpacityProps` are supported

---

## Input

Controlled input component with variants and error handling. It extends all standard `TextInputProps` from React Native.

### Usage

```tsx
const [value, setValue] = useState("");

<Input
  placeholder="Type here"
  value={value}
  onChangeText={setValue}
/>

<Input
  variant="outlined"
  error={value.length > 0 && value.length < 3}
  value={value}
  onChangeText={setValue}
/>
```

### Props

- `value`: `string` - Controlled input value
- `onChangeText`: `(text: string) => void` - Handler for text changes
- `variant`: `"default" | "outlined"` (default: `"default"`)
- `error`: `boolean` (default: `false`) - Shows error styling (red border)
- `placeholderTextColor`: `string` (default: `colors.muted`)
- `style`: Optional custom styles (extends `TextInputProps["style"]`)
- All standard React Native `TextInputProps` are supported

---

## Card (Surface Primitive)

The `Card` component represents a surface. It controls background, border, padding, and elevation. It extends all standard `ViewProps` from React Native.

### Usage

```tsx
<Card>
  <Text>Default surface</Text>
</Card>

<Card variant="elevated" elevationLevel="medium">
  <Text>Elevated surface</Text>
</Card>

<Card variant="outlined" padding="lg">
  <Text>Outlined surface with large padding</Text>
</Card>
```

### Props

- `variant`: `"default" | "elevated" | "outlined"` (default: `"default"`)
- `elevationLevel`: `"low" | "medium" | "high"` (default: `"medium"`) - Only applies when `variant="elevated"`
- `padding`: `"xs" | "sm" | "md" | "lg" | "xl"` (default: `"md"`)
- `style`: Optional custom styles (extends `ViewProps["style"]`)
- All standard React Native `ViewProps` are supported

---

## Stack (Layout Primitive)

`Stack` simplifies flex layouts with consistent spacing. It automatically applies gaps between children and extends all standard `ViewProps` from React Native.

### Usage

```tsx
<Stack gap="md">
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>

<Stack direction="row" gap="sm" justify="space-between">
  <Text>Left</Text>
  <Text>Right</Text>
</Stack>

<Stack direction="row" gap="sm" wrap>
  <Button title="Btn 1" onPress={() => {}} />
  <Button title="Btn 2" onPress={() => {}} />
</Stack>

<Stack direction="row" gap="sm" reverse>
  <Text>Last</Text>
  <Text>First</Text>
</Stack>
```

### Props

- `direction`: `"column" | "row"` (default: `"column"`)
- `gap`: `"xs" | "sm" | "md" | "lg" | "xl"` (default: `"md"`)
- `justify`: Flex `justifyContent` value (e.g., `"flex-start"`, `"center"`, `"space-between"`)
- `align`: Flex `alignItems` value (e.g., `"flex-start"`, `"center"`, `"stretch"`)
- `wrap`: `boolean` (default: `false`) - Enables flex wrap
- `reverse`: `boolean` (default: `false`) - Reverses the direction (row-reverse or column-reverse)
- `style`: Optional custom styles (extends `ViewProps["style"]`)
- All standard React Native `ViewProps` are supported

---

## Modal

Modal is a composition of `Modal + Card + Stack` patterns. It provides a full-screen overlay with a centered content area. It extends all standard `ViewProps` from React Native.

### Usage

```tsx
const [visible, setVisible] = useState(false);

<Modal visible={visible} onClose={() => setVisible(false)}>
  <Stack gap="md">
    <Text variant="heading">Modal title</Text>
    <Text>Modal content</Text>
    <Button title="Close" onPress={() => setVisible(false)} />
  </Stack>
</Modal>;
```

### Props

- `visible`: `boolean` (required) - Controls modal visibility
- `onClose`: `() => void` - Handler called when modal should close (tap outside or back button)
- `children`: `React.ReactNode` (required) - Modal content
- `animationType`: `"fade" | "slide" | "none"` (default: `"fade"`)
- `padding`: `"xs" | "sm" | "md" | "lg" | "xl"` (default: `"md"`)
- `elevationLevel`: `"low" | "medium" | "high"` (default: `"high"`)
- `style`: Optional custom styles (extends `ViewProps["style"]`)
- All standard React Native `ViewProps` are supported (except `style`)

---

## Design Tokens

All components use token-based styling for consistency. Tokens are defined in `src/tokens/` and should be used instead of hardcoded values.

### Colors

```tsx
primary: "#A076F9";
background: "#F7F2FF";
surface: "#FFFFFF";
text: "#3D2C8D";
muted: "#BDBDBD";
border: "#EAE4F2";
error: "#D32F2F";
success: "#388E3C";
```

### Spacing

```tsx
xs: 4;
sm: 8;
md: 12;
lg: 16;
xl: 24;
```

### Elevation

```tsx
low: 1;
medium: 3;
high: 6;
```

### Border Radius

```tsx
sm: 4;
md: 8;
lg: 16;
```

### Typography

```tsx
heading: { fontSize: 20, fontWeight: 600 }
body: { fontSize: 16, fontWeight: 400 }
caption: { fontSize: 13, fontWeight: 400 }
```

---

## Playground

The `Playground` screen (located at `src/screens/Playground.tsx`) demonstrates all primitives together and serves as:

- Visual documentation
- Manual test bed
- API reference by example

This screen should stay **simple and explicit**, not clever.

---

## Best Practices

1. **Use tokens**: Always use design tokens instead of hardcoded values
2. **Controlled components**: Prefer controlled components with explicit `value` and `onChange` handlers
3. **Composition**: Combine primitives to build complex UIs (e.g., `Card` + `Stack` + `Input`)
4. **Accessibility**: All components include built-in accessibility props
5. **Extensibility**: Use `style` prop for custom styling when needed, but prefer token-based props

---

## Next Steps

- Add `Label` + `HelperText` primitives
- Add loading state to `Button`
- Prepare tokens for dark mode
- Consider form abstractions (optional)
