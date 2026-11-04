import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

interface Props {
    name: string, role: string, imagen: string
}


export default function ProfileCard({ name, role, imagen }: Props) {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: imagen }}></Image>
            <View>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.roleText}>{role}</Text>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: "center",
        alignSelf: "center",
        padding: 20,
        height: 1000
    },
    avatar: {
        height: 110,
        width: 110,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: "fff",
    },
    roleText: {
        fontSize: 20,
        textAlign: "center"
    },
    nameText: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "center"
    }
});
