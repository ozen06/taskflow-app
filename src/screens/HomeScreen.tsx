import { StyleSheet, Text, View } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { lightTheme } from '../constants/theme';
import AddTaskScreen from './AddTaskScreen';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <View style={[{ margin: 5 }, styles.component]}>
        <AddTaskScreen />
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
  component: {
    backgroundColor: 'rgba(255, 255, 255, 0.82)',
    borderRadius: 28,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.65)',
    shadowColor: '#1A1A2E',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 5,
    width: 300
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
