import React from "react";
import {
  Modal as RNModal,
  View,
  ViewProps,
  TouchableOpacity,
  ModalProps as RNModalProps,
} from "react-native";
import { colors, radius, spacing, elevation } from "../tokens";

interface ModalProps extends Omit<ViewProps, "style"> {
  visible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  padding?: keyof typeof spacing;
  elevationLevel?: keyof typeof elevation;
  animationType?: RNModalProps["animationType"];
  style?: ViewProps["style"];
}

export const Modal: React.FC<ModalProps> = ({
  visible,
  onClose,
  padding = "md",
  elevationLevel = "high",
  animationType = "fade",
  style,
  children,
  ...props
}) => {
  const handleContentPress = (e: any) => {
    e.stopPropagation();
  };

  const overlayStyle = {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center" as const,
    alignItems: "center" as const,
    padding: spacing.lg,
  };

  const contentStyle = {
    backgroundColor: colors.surface,
    minWidth: 300,
    maxWidth: "90%" as const,
    padding: spacing[padding],
    borderRadius: radius.md,
    shadowColor: colors.text,
    shadowOffset: { width: 0, height: elevation[elevationLevel] },
    shadowOpacity: 0.2,
    shadowRadius: elevation[elevationLevel] * 2,
    elevation: elevation[elevationLevel],
  };

  return (
    <RNModal
      transparent
      animationType={animationType}
      visible={visible}
      onRequestClose={onClose}
      accessibilityViewIsModal
    >
      <TouchableOpacity
        style={overlayStyle}
        activeOpacity={1}
        onPress={onClose}
        accessibilityRole="button"
        accessibilityLabel="Close modal"
      >
        <View
          style={[contentStyle, style]}
          onStartShouldSetResponder={() => true}
          onTouchEnd={handleContentPress}
          accessibilityRole="none"
          {...props}
        >
          {children}
        </View>
      </TouchableOpacity>
    </RNModal>
  );
};
