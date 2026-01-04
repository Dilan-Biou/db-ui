import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import PlaygroundScreen from "./src/screens/Playground";

export default function App() {
  return (
    <View style={styles.container}>
      <PlaygroundScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F2FF",
    alignItems: "center",
    justifyContent: "center",
  },
});
