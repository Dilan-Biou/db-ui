import React from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { spacing } from "../tokens";

interface StackProps extends Omit<ViewProps, "style"> {
  direction?: "row" | "column";
  gap?: keyof typeof spacing;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  wrap?: boolean;
  reverse?: boolean;
  style?: ViewProps["style"];
}

export const Stack: React.FC<StackProps> = ({
  direction = "column",
  gap = "md",
  align,
  justify,
  wrap = false,
  reverse = false,
  style,
  children,
  ...props
}) => {
  const childrenArray = React.Children.toArray(children);
  const gapValue = spacing[gap];
  const isRow = direction === "row";

  const containerStyle: ViewStyle = {
    flexDirection: reverse
      ? isRow
        ? "row-reverse"
        : "column-reverse"
      : direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap ? "wrap" : "nowrap",
  };

  return (
    <View style={[containerStyle, style]} accessibilityRole="none" {...props}>
      {childrenArray.map((child, index) => {
        const isLast = index === childrenArray.length - 1;
        const marginStyle: ViewStyle = {};

        if (!isLast) {
          if (isRow) {
            marginStyle.marginRight = gapValue;
          } else {
            marginStyle.marginBottom = gapValue;
          }
        }

        // Only wrap if we need to add margin
        if (Object.keys(marginStyle).length === 0) {
          return <React.Fragment key={index}>{child}</React.Fragment>;
        }

        return (
          <View key={index} style={marginStyle}>
            {child}
          </View>
        );
      })}
    </View>
  );
};
