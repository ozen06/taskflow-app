import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';

export default function ProfileScreen() {
    return (
        <View style={styles.container}>
            <ProfileCard
                name="Enzo"
                role="Programador"
                imagen="https://www.kindpng.com/picc/m/363-3638766_transparent-crash-bandicoot-profile-hd-png-download.png"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "#9b9b9b",
        shadowColor: "fff"
    }
});
