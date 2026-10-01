import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulos}>TaskFlow</Text>
      <Text style={styles.subtitulos}>Checkpoint 1: Estructura Base</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4338CA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulos: {
    color: '#FFFFFF',
    fontSize: 45
  },
  subtitulos: {
    color: '#FFFFFF',
    fontSize: 22
  }
});
