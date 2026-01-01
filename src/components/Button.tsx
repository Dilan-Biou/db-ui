import React from "react";
import {
  TouchableOpacity,
  Text as RNText,
  TouchableOpacityProps,
} from "react-native";
import { colors, spacing, radius, typography } from "../tokens";

interface ButtonProps extends Omit<TouchableOpacityProps, "style"> {
  title: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  style?: TouchableOpacityProps["style"];
}

export const Button: React.FC<ButtonProps> = ({
  title,
  variant = "primary",
  disabled = false,
  style,
  ...props
}) => {
  const backgroundColor =
    variant === "primary" ? colors.primary : colors.surface;
  const textColor = variant === "primary" ? colors.surface : colors.primary;
  const borderColor = variant === "secondary" ? colors.primary : undefined;
  const borderWidth = variant === "secondary" ? 1 : 0;

  const disabledOpacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor,
          borderColor,
          borderWidth,
          paddingVertical: spacing.sm,
          paddingHorizontal: spacing.md,
          borderRadius: radius.md,
          alignItems: "center",
          opacity: disabledOpacity,
        },
        style,
      ]}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={title}
      accessibilityState={{ disabled }}
      {...props}
    >
      <RNText
        style={{
          color: textColor,
          fontSize: typography.body.fontSize,
          fontWeight: typography.body.fontWeight,
        }}
      >
        {title}
      </RNText>
    </TouchableOpacity>
  );
};
