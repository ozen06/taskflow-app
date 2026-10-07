import WelcomeScreen from "./src/screens/WelcomeScreen";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <WelcomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
