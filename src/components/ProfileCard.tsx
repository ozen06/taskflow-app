import { StyleSheet, Text, View, Image } from 'react-native';
import { lightTheme } from '../constants/theme';

interface Props {
    name: string, role: string, imagen: string
}


export default function ProfileCard({ name, role, imagen }: Props) {
    return (
        <View>
            <Image style={styles.avatar} source={{ uri: imagen }}></Image>
            <View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.roleText}>{role}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
        alignSelf: "center",
    },
    statistics: {
        flexDirection: "column",
        padding: 5,
        flex: 1
    },
    nameText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center",
    },
    avatar: {
        height: 110,
        width: 110,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        borderWidth: 3,
        borderColor: lightTheme.border
    },
    roleText: {
        fontSize: 20,
        textAlign: "center"
    }
});
