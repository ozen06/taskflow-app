import { StyleSheet, Text, View, Image } from 'react-native';
import ProfileScreen from './ProfileScreen';
import { lightTheme } from '../constants/theme';
import TaskScreen from './TaskScreen';

export default function HomeScreen() {
  const user = "Enzo"
  const imageProfile = "https://www.kindpng.com/picc/m/363-3638766_transparent-crash-bandicoot-profile-hd-png-download.png"

  return (
    <View style={styles.container}>
      {/* Parte superior interfaz */}
      <View style={styles.viewUP}>
        <View style={{ alignContent: "flex-start" }}>
          <Text style={styles.welcomeText}>¡Hola, {user}!</Text>
        </View>
        <View style={{ alignContent: "flex-start" }}>
          <Image style={styles.profileImage} source={{ uri: imageProfile }}></Image>
        </View>
      </View>
      <View style={[{ margin: 5 }, styles.component]}>
        <TaskScreen />
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
    width: 395
  },
  viewUP: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    paddingTop: 10,
    width: 395
  },
  welcomeText: {
    color: "#070606",
    fontSize: 32,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
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
