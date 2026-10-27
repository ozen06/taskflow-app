import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert, Pressable, ScrollView } from 'react-native';
import TaskCreate from '../components/TaskCreate';
import TaskDetail from '../components/TaskDetail';
const { width, height } = Dimensions.get('window');

export default function TaskScreen() {
    interface Task {
        taskName: string;
        taskDescription: string;
        taskCategory: string;
    }
    const [modalVisible, setModalVisible] = useState(false);
    const [taskList, setTaskList] = useState<(Task & { createdAt: Date })[]>([]);
    return (
        <View>
            <TouchableOpacity
                style={modalVisible == false ? styles.modal : styles.modalOff}
                onPress={() => { modalVisible == false ? setModalVisible(true) : setModalVisible(false) }}
            >
                <Text style={styles.title}>+</Text>
            </TouchableOpacity>
            <View>
                {modalVisible ? <TaskCreate setTaskList={setTaskList} taskList={taskList} /> : <TaskDetail taskList={taskList} />}
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
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
        color: "#fff",
        backgroundColor: 'rgb(255, 0, 0)',
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
        left: 250,
        width: 85,
        height: 100,
        zIndex: 1000
    },
    modalOff: {
        position: "absolute",
        bottom: 500,
        left: 250,
        width: 85,
        height: 100,
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
