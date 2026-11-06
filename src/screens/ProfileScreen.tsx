import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { TasksStackParamList } from '../navigation/TasksStack';
import ProfileCard from '../components/ProfileCard'; 
import { useSelector } from 'react-redux';
import type { RootState } from '../store/store';

type RouterProp = RouteProp<TasksStackParamList>;

export default function ProfileScreen() {
    const taskList = useSelector((state: RootState) => state.tasks.taskList);
    const taskListInCompleted = taskList.filter((element) => element.completed == false)
    const taskCompleted = taskList.filter((element) => element.completed)
    const route = useRoute<RouterProp>(); 
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/fondo_profile.jpg')}
                style={styles.container}
                resizeMode="cover" // Se adapta perfectamente
            >
                <View style={styles.centerItem}>
                    <ProfileCard
                        name="Enzo"
                        role="Programador"
                        imagen="https://www.kindpng.com/picc/m/363-3638766_transparent-crash-bandicoot-profile-hd-png-download.png"
                    />
                    <View style={styles.centerItemRow}>
                        <View style={[styles.statistics, { margin: 5 }]}>
                            <Text style={[styles.nameText, { fontSize: 20 }]}>Tareas{'\n'}creadas</Text>
                            <Text style={[styles.nameText, { justifyContent: "center", fontSize: 18 }]}>{taskListInCompleted.length || 0}</Text>
                        </View>
                        <View style={[styles.statistics, { margin: 5 }]} >
                            <Text style={[styles.nameText, { fontSize: 20 }]}>Tareas{'\n'}completadas</Text>
                            <Text style={[styles.nameText, { justifyContent: "center", fontSize: 18 }]}>{taskCompleted.length || 0}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground >
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        textAlign: "center"
    },
    centerItemRow: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        textAlign: "center"
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
        borderWidth: 10,
    },
    roleText: {
        fontSize: 20,
        textAlign: "center"
    }
});
