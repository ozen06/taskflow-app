import HomeScreen from "./src/screens/HomeScreen";
import { View, StyleSheet } from "react-native";

export default function App() {
  return (
    <HomeScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
