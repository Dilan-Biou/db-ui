import React from "react";
import { View, ViewProps } from "react-native";
import { colors, radius, elevation, spacing } from "../tokens";

interface CardProps extends Omit<ViewProps, "style"> {
  variant?: "default" | "elevated" | "outlined";
  elevationLevel?: keyof typeof elevation;
  padding?: keyof typeof spacing;
  style?: ViewProps["style"];
}

export const Card: React.FC<CardProps> = ({
  variant = "default",
  elevationLevel = "medium",
  padding = "md",
  style,
  children,
  ...props
}) => {
  const hasBorder = variant === "outlined";
  const hasElevation = variant === "elevated";

  const baseStyle = {
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    padding: spacing[padding],
    ...(hasBorder && {
      borderWidth: 1,
      borderColor: colors.border,
    }),
    ...(hasElevation && {
      shadowColor: colors.text,
      shadowOffset: { width: 0, height: elevation[elevationLevel] },
      shadowOpacity: 0.1,
      shadowRadius: elevation[elevationLevel],
      elevation: elevation[elevationLevel],
    }),
  };

  return (
    <View style={[baseStyle, style]} accessibilityRole="none" {...props}>
      {children}
    </View>
  );
};
