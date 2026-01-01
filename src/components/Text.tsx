import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { typography, colors } from "../tokens";

type TextVariant = "heading" | "body" | "caption";

interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: keyof typeof colors;
}

export const Text: React.FC<TextProps> = ({
  variant = "body",
  color = "text",
  style,
  ...props
}) => {
  return (
    <RNText
      style={[
        {
          fontSize: typography[variant].fontSize,
          fontWeight: typography[variant].fontWeight,
          color: colors[color],
        },
        style,
      ]}
      {...props}
    />
  );
};
