import { StyleSheet, Text, View } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import { lightTheme } from '../constants/theme';

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
        height: 200,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
