import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import TaskCreate, { Task } from '../components/TaskCreate';
import TaskList from '../components/TaskList';
import { lightTheme } from '../constants/theme';
const { width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TasksStackParamList } from '../navigation/TasksStack';

type TypesEmpty = {
    textEmpty: string;
}
type NavigationProp = NativeStackNavigationProp<TasksStackParamList>;

export default function TaskScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [taskCompleted, setCompleted] = useState<Task[]>([]);
    const navigation = useNavigation<NavigationProp>();
    useEffect(() => {
        if (taskList.length >= 0) {
            navigation.navigate("ProfileTab", { taskCreated: (taskList.length || 0), taskCompleted: (taskCompleted.length || 0) })
        }
    }, [taskList.length]);
    return (
        < View >
            <TouchableOpacity
                style={modalVisible == false ? styles.modal : styles.modalOff}
                onPress={() => { setModalVisible(!modalVisible) }}
            >
                <Text style={[styles.buttonCreate, { justifyContent: "center" }]}>{modalVisible == false ? "+" : "Atras"} </Text>
            </TouchableOpacity>
            <View style={styles.container} >
                {modalVisible == true ? <TaskCreate setTaskList={setTaskList} taskList={taskList} /> : taskList.length > 0 ? <TaskList setTaskList={setTaskList} TaskList={taskList} taskCompleted={taskCompleted} setTaskCompleted={setCompleted} type={"TaskList"} /> : <EmptyTask textEmpty={"No hay tareas, Crea una."} />}
            </View >
            <View style={[styles.container, { marginTop: 15 }]}>
                {modalVisible == true ? "" : taskCompleted.length > 0 ? <TaskList setTaskList={setTaskList} TaskList={taskList} taskCompleted={taskCompleted} setTaskCompleted={setCompleted} type={"TaskListCompleted"} /> : <EmptyTask textEmpty={"Todavia no hay tareas completadas!"} />}
            </View >
        </View >
    );
}


function EmptyTask({ textEmpty }: TypesEmpty) {
    return (
        <View>
            <Text style={[styles.title, { textAlign: "center", textAlignVertical: "bottom" }]}>{textEmpty}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 28,
        borderWidth: 1,
        borderColor: lightTheme.border
    },
    scrollContainer: {
        flexGrow: 1
    },
    parameters: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25,
    },
    TextInput: {
        fontSize: Math.min(width * 0.08, 21),
        fontWeight: "700",
        textAlign: "center",
        borderRadius: 15,
        padding: 3,
    },
    title: {
        fontSize: Math.min(width * 0.08, 21),
        fontWeight: "500",
        textAlign: "center",
        color: lightTheme.text,
        borderRadius: 15,
        padding: 20,
    },
    buttonCreate: {
        backgroundColor: "#ce2a2a",
        fontSize: Math.min(width * 0.08, 21),
        fontWeight: "500",
        textAlign: "center",
        color: lightTheme.text,
        borderRadius: 15,
        padding: 20,

    },
    textInput: {
        fontWeight: "600",
        fontSize: 15,
        textAlign: "center",
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
        borderRadius: 15,
        padding: 22,
    },
    selected: {
        backgroundColor: '#ffffff',
        borderColor: '#007AFF',
        borderWidth: 3,
        borderRadius: 15
    },
    error: {
        color: "#f01d1d",
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },
    buttonWrapper: {
        borderRadius: 16,
        overflow: 'hidden',
        marginTop: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.65)',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    blurContainer: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        textAlign: 'center',
    },
    modal: {
        position: "absolute",
        bottom: 0,
        left: 290,
        width: 95,
        height: 100,
        textAlign: "center",
        justifyContent: "center",
        zIndex: 1000
    },
    modalOff: {
        position: "absolute",
        bottom: 500,
        left: 250,
        width: 95,
        height: 100,
        justifyContent: "center",
        zIndex: 1000
    },
    absoluteBlur: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
