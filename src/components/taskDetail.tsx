import { useState } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    SafeAreaViewBase
} from 'react-native';


const INITIAL_TASKS = [
    { id: '1', title: 'Aprender FlatList', completed: false },
    { id: '2', title: 'Configurar Navigation', completed: false },
    { id: '3', title: 'Instalar Redux Toolkit', completed: false },
];

export default function App() {
    const [tasks, setTasks] = useState(INITIAL_TASKS);

    const toggleTask = (id: string) => {
        setTasks((prevState) => prevState.map((elemento) => {
            elemento.id == id ? { ...elemento, completed: true } : elemento
            return elemento
        }))
    }

    return (
        <SafeAreaViewBase style={styles.container}>
            <Text style={styles.title}>TaskFlow List</Text>
            <FlatList
                data={tasks}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.item && item.completed == true ? { borderColor: "#f01d1d" } : { borderColor: "#fff" }]}
                        onPress={() => toggleTask(item.id)}
                    >
                        <Text>{item.title}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaViewBase>
    )

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
});