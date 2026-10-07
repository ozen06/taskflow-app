import { StyleSheet, Text, View, Image } from 'react-native';

interface Props {
    name: string, role: string, imagen: string
}


export default function ProfileCard({ name, role, imagen }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: imagen }}></Image>
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.roleText}>{role}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    padding: 20
    },
    avatar: {
        height: 150,
        width: 150,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "fff"
    },
    infoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },
    nameText: {
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center"
    },
    roleText: {
        fontSize: 20,
        textAlign: "center"
    }
});
