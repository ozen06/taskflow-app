import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import { ImageBackground } from 'react-native';

export default function ProfileScreen() {
    return ( 
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/fondo_profile.jpg')}
                style={styles.container}
                resizeMode="cover" // Se adapta perfectamente
            >
                <ProfileCard
                    name="Enzo"
                    role="Programador"
                    imagen="https://www.kindpng.com/picc/m/363-3638766_transparent-crash-bandicoot-profile-hd-png-download.png"
                />
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <View style={[styles.statistics, { width: 200 }]}>
                        <Text style={[styles.nameText, { fontSize: 20 }]}>Tareas{'\n'}creadas</Text>
                        <Text style={[styles.nameText, { justifyContent: "center", fontSize: 20 }]}>0</Text>
                    </View>
                    <View style={[styles.statistics, { borderStartWidth: 3, width: 200 }]}>
                        <Text style={[styles.nameText, { fontSize: 20 }]}>Tareas completadas</Text>
                        <Text style={[styles.nameText, { justifyContent: "center", fontSize: 20 }]}>0</Text>
                    </View>
                </View>
            </ImageBackground>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    statistics: {
        flexDirection: "column",
        padding: 10
    },
    nameText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    },
});
