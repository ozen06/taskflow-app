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
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: lightTheme.border
    }
});
