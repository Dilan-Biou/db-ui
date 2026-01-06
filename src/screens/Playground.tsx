import { useState } from "react";
import { View, ScrollView } from "react-native";
import { Button, Input, Card, Modal, Stack, Text } from "../components";
import { spacing, radius, colors } from "../tokens";

const PlaygroundScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [defaultInput, setDefaultInput] = useState("");
  const [outlinedInput, setOutlinedInput] = useState("");
  const [errorInput, setErrorInput] = useState("");
  const [modalInput, setModalInput] = useState("");
  const [inputError, setInputError] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1, padding: spacing.lg }}
      keyboardShouldPersistTaps="handled"
    >
      <Stack gap="lg">
        {/* Text Component Examples */}
        <Card variant="elevated" elevationLevel="medium">
          <Stack gap="md">
            <Text variant="heading">Text Component</Text>
            <Text variant="heading">Heading Text</Text>
            <Text variant="body">Body Text - Default variant</Text>
            <Text variant="caption">Caption Text - Smaller size</Text>
            <Text color="primary">Primary Color Text</Text>
            <Text color="error">Error Color Text</Text>
            <Text color="success">Success Color Text</Text>
            <Text color="muted">Muted Color Text</Text>
          </Stack>
        </Card>

        {/* Button Component Examples */}
        <Card variant="outlined">
          <Stack gap="md">
            <Text variant="heading">Button Component</Text>
            <Stack direction="row" gap="sm" wrap>
              <Button title="Primary" variant="primary" onPress={() => {}} />
              <Button
                title="Secondary"
                variant="secondary"
                onPress={() => {}}
              />
              <Button title="Disabled" disabled onPress={() => {}} />
            </Stack>
            <Button
              title="Open Modal"
              variant="primary"
              onPress={() => setModalVisible(true)}
            />
          </Stack>
        </Card>

        {/* Input Component Examples */}
        <Card variant="elevated" elevationLevel="low">
          <Stack gap="md">
            <Text variant="heading">Input Component</Text>
            <Input
              placeholder="Default variant input..."
              value={defaultInput}
              onChangeText={setDefaultInput}
            />
            <Input
              placeholder="Outlined variant input..."
              variant="outlined"
              value={outlinedInput}
              onChangeText={setOutlinedInput}
            />
            <Input
              placeholder="Input with error..."
              variant="outlined"
              error={inputError}
              value={errorInput}
              onChangeText={(text) => {
                setErrorInput(text);
                setInputError(text.length > 0 && text.length < 3);
              }}
            />
            <View>
              {inputError && (
                <Text color="error" variant="caption">
                  Input must be at least 3 characters
                </Text>
              )}
            </View>
          </Stack>
        </Card>

        {/* Stack Component Examples */}
        <Card variant="default">
          <Stack gap="md">
            <Text variant="heading">Stack Component</Text>

            <Text variant="body">Column Stack (default):</Text>
            <Stack
              gap="sm"
              style={{
                backgroundColor: colors.background,
                padding: spacing.sm,
                borderRadius: radius.sm,
              }}
            >
              <Text>Item 1</Text>
              <Text>Item 2</Text>
              <Text>Item 3</Text>
            </Stack>

            <Text variant="body">Row Stack:</Text>
            <Stack
              direction="row"
              gap="sm"
              style={{
                backgroundColor: colors.background,
                padding: spacing.sm,
                borderRadius: radius.sm,
              }}
            >
              <Text>Item 1</Text>
              <Text>Item 2</Text>
              <Text>Item 3</Text>
            </Stack>

            <Text variant="body">Row Stack with wrap:</Text>
            <Stack
              direction="row"
              gap="sm"
              wrap
              style={{
                backgroundColor: colors.background,
                padding: spacing.sm,
                borderRadius: radius.sm,
              }}
            >
              <Button title="Btn 1" variant="secondary" onPress={() => {}} />
              <Button title="Btn 2" variant="secondary" onPress={() => {}} />
              <Button title="Btn 3" variant="secondary" onPress={() => {}} />
              <Button title="Btn 4" variant="secondary" onPress={() => {}} />
            </Stack>

            <Text variant="body">Row Stack with justify:</Text>
            <Stack
              direction="row"
              gap="sm"
              justify="space-between"
              style={{
                backgroundColor: colors.background,
                padding: spacing.sm,
                borderRadius: radius.sm,
              }}
            >
              <Text>Left</Text>
              <Text>Right</Text>
            </Stack>
          </Stack>
        </Card>

        {/* Card Component Examples */}
        <Stack gap="md">
          <Text variant="heading">Card Component</Text>

          <Card variant="default" padding="md">
            <Text>Default Card - No elevation, no border</Text>
          </Card>

          <Card variant="elevated" elevationLevel="low" padding="md">
            <Text>Elevated Card - Low elevation</Text>
          </Card>

          <Card variant="elevated" elevationLevel="medium" padding="md">
            <Text>Elevated Card - Medium elevation</Text>
          </Card>

          <Card variant="elevated" elevationLevel="high" padding="md">
            <Text>Elevated Card - High elevation</Text>
          </Card>

          <Card variant="outlined" padding="md">
            <Text>Outlined Card - With border</Text>
          </Card>

          <Card variant="elevated" elevationLevel="high" padding="lg">
            <Stack gap="md">
              <Text variant="heading">Card with nested content</Text>
              <Text>
                This card has large padding and contains a Stack with multiple
                items.
              </Text>
              <Button
                title="Action Button"
                variant="primary"
                onPress={() => {}}
              />
            </Stack>
          </Card>
        </Stack>

        {/* Modal Component */}
        <Modal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          padding="lg"
          elevationLevel="high"
          animationType="fade"
        >
          <Stack gap="md">
            <Text variant="heading">Modal Example</Text>
            <Text>
              This is a modal component. You can close it by tapping outside or
              using the close button.
            </Text>
            <Input
              placeholder="Type in modal..."
              variant="outlined"
              value={modalInput}
              onChangeText={setModalInput}
            />
            <Stack direction="row" gap="sm" justify="flex-end">
              <Button
                title="Cancel"
                variant="secondary"
                onPress={() => setModalVisible(false)}
              />
              <Button
                title="Confirm"
                variant="primary"
                onPress={() => setModalVisible(false)}
              />
            </Stack>
          </Stack>
        </Modal>
      </Stack>
    </ScrollView>
  );
};

export default PlaygroundScreen;
