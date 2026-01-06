import React from "react";
import { TextInput as RNTextInput, TextInputProps } from "react-native";
import { colors, spacing, radius, typography } from "../tokens";

interface InputProps extends TextInputProps {
  variant?: "default" | "outlined";
  error?: boolean;
}

export const Input: React.FC<InputProps> = ({
  variant = "default",
  error = false,
  style,
  placeholderTextColor = colors.muted,
  ...props
}) => {
  // Enforce controlled usage in development
  if (__DEV__) {
    if (props.value === undefined) {
      console.warn(
        "Input should be used as a controlled component (provide `value`)."
      );
    }
  }

  const borderColor = error ? colors.error : colors.border;
  const borderWidth = variant === "outlined" ? 1 : 0;

  const baseStyle = {
    backgroundColor: variant === "default" ? colors.surface : colors.background,
    color: colors.text,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radius.md,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight,
    borderWidth,
    borderColor: variant === "outlined" ? borderColor : "transparent",
    minHeight: 44,
  };

  return (
    <RNTextInput
      style={[baseStyle, style]}
      placeholderTextColor={placeholderTextColor}
      accessibilityRole="none"
      accessibilityState={{ disabled: props.editable === false }}
      {...props}
    />
  );
};
