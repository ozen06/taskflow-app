import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert, Pressable, ScrollView } from 'react-native';
import { lightTheme } from '../constants/theme';
const { width, height } = Dimensions.get('window');

const options = ["Personal", "Hogar"];

export default function TaskScreen() {
    interface Task {
        taskName: string;
        taskDescription: string;
        taskCategory: string;
    }
    const [onChangeText, setOnChangeText] = useState<Task>({ taskName: "", taskDescription: "", taskCategory: options[0] });
    const [error, setError] = useState("");
    const [taskList, setTaskList] = useState<(Task & { createdAt: Date })[]>([]);
    const [titleFocused, setTitleFocused] = useState(false);

    const validateForm = (title: any) => {
        let currentError = "";
        if (onChangeText.taskName.length < 5 || title == "title") {
            currentError = "title"
            setError(currentError)
        } else if (onChangeText.taskDescription.length < 10 || title == "description") {
            currentError = "description"
            setError(currentError)
        } else {
            setError("")
            return true
        }
    }
    const onChangeTextFunc = (type: string, content: string) => {
        setOnChangeText((prevState) => ({
            ...prevState,
            [type]: content
        }))
        if (type == "taskName") {
            content.length > 4 ? validateForm("title") : ""
        } else {
            content.length > 9 ? validateForm("description") : ""
        }
    }
    const handleAddTask = () => {
        let taskCopy = { ...onChangeText, createdAt: new Date() };
        setTaskList((prevstate) => [...prevstate, taskCopy])
        Alert.alert("Éxito", "Tarea capturada localmente")
        console.log(taskList)
        const types = ["taskName", "taskDescription"]
        for (let i = 0; i < types.length; i++) {
            onChangeTextFunc(types[i], "")
        }
    }
    return (
        <ScrollView
            style={styles.scrollContainer}
            keyboardShouldPersistTaps="handled"
        >

            <View style={styles.parameters}>
                <Text style={styles.TextInput}>Tarea</Text>
                <TextInput
                    style={[styles.title, { borderWidth: 2, borderColor: error ? 'red' : titleFocused ? '#007AFF' : '#ccc' }]}
                    placeholder="Nombre de la tarea"
                    autoCapitalize="words"
                    keyboardType="default"
                    value={onChangeText.taskName}
                    onChangeText={(text) => onChangeTextFunc("taskName", text)}
                />
                <Text style={styles.error}>{error == "title" ? "Introduce un nombre de tarea mayor a 5 caracteres" : ""}</Text>
                <TextInput
                    style={[styles.textInput, { fontSize: Math.min(width * 0.08, 19), margin: 10, borderWidth: 2, borderColor: error ? 'red' : titleFocused ? '#007AFF' : '#ccc' }]}
                    placeholder="Descripcion "
                    multiline
                    autoCapitalize="words"
                    keyboardType="default"
                    numberOfLines={3}
                    maxLength={40}
                    value={onChangeText.taskDescription}
                    onChangeText={(description) => onChangeTextFunc("taskDescription", description)}
                />
                <Text style={styles.error}>{error == "description" ? "Introduce una descripcion mayor a 10 caracteres" : ""}</Text>
                <Text style={styles.TextInput}>Categoria</Text>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    {options.map((option, index) => {
                        const isSelected = onChangeText.taskCategory == option;

                        return (
                            <Pressable
                                key={`${option}-${isSelected ? 'active' : 'inactive'}`}
                                onPress={() => {
                                    onChangeTextFunc("taskCategory", option)
                                }}
                                style={[
                                    { margin: 3, borderRadius: 15 },
                                    isSelected ? styles.selected : { backgroundColor: '#f0f0f0' }
                                ]}
                            >
                                <Text style={[styles.textInput, { fontSize: 16 }]}>
                                    {option}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.blurContainer} onPress={() => {
                        let validation = validateForm("")
                        return (
                            validation == true ?
                                handleAddTask() : ""
                        )
                    }}>
                        <Text style={[styles.buttonText, { fontSize: 25 }]}>Crear tarea</Text>
                    </TouchableOpacity>
                </View>
            </View >
        </ScrollView>
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
        backgroundColor: 'rgba(255, 255, 255, 0.82)',
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
});
