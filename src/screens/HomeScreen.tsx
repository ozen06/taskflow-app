import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { lightTheme } from '../constants/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulos}>TaskFlow</Text>
      <Text style={styles.subtitulos}>Checkpoint 1: Estructura Base</Text>
      <View style={styles.profileCard}>
        <ProfileScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: lightTheme.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    padding: 20
  },
  titulos: {
    color: lightTheme.text,
    fontSize: 45
  },
  subtitulos: {
    color: lightTheme.text,
    fontSize: 22
  }
});
