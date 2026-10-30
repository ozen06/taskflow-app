import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert, Pressable, ScrollView } from 'react-native';
import { lightTheme } from '../constants/theme';
const { width, height } = Dimensions.get('window');


interface Task {
    taskName: string;
    taskDescription: string;
    taskCategory: string;
}
interface Focused {
    title: boolean;
    description: boolean;
}
interface TaskListProps {
    taskList: (Task & { createdAt: Date, active: boolean })[];
    setTaskList: React.Dispatch<React.SetStateAction<(Task & { createdAt: Date, active: boolean })[]>>;
}

export default function TaskCreate({ taskList, setTaskList }: TaskListProps) {
    const options = ["Personal", "Hogar"];
    const [onChangeText, setOnChangeText] = useState<Task>({ taskName: "", taskDescription: "", taskCategory: options[0] });
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorDescription, setErrorDescription] = useState(false);
    const [titleFocused, setTitleFocused] = useState<Focused>({ title: false, description: false });

    const validateForm = () => {
        const conditionTrueDescription = onChangeText.taskDescription.length >= 10
        const conditionTrueTitle = onChangeText.taskName.length >= 5
        if (onChangeText.taskName.length < 5) {
            setErrorTitle(true)
            if (onChangeText.taskDescription.length < 10) {
                setErrorDescription(true)
            }
        } else if (onChangeText.taskDescription.length < 10) {
            setErrorDescription(true)
            if (onChangeText.taskName.length < 5) {
                setErrorTitle(true)
            }
        } else if (conditionTrueTitle == true && conditionTrueDescription == true) {
            setErrorDescription(false)
            setErrorTitle(false)
            return true
        }
    }
    const onChangeTextFunc = (type: string, content: string) => {
        setOnChangeText((prevState) => ({
            ...prevState,
            [type]: content
        }))
    }
    const handleAddTask = () => {
        const validation = validateForm()
        if (validation == true) {
            let taskCopy = { ...onChangeText, createdAt: new Date(), active: false };
            setTaskList((prevstate: any) => [...(prevstate || []), taskCopy])
            Alert.alert("Éxito", "Tarea capturada localmente")
            const types = ["taskName", "taskDescription"]
            for (let i = 0; i < types.length; i++) {
                onChangeTextFunc(types[i], "")
            }
            const colors = ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33F3"];
            for (let i = 0; i < colors.length; i++) {
                setTaskList((prevState) =>
                    prevState.map((task) => {
                        // Borro todas las tareas que estan detalladas en caso de duplicacion
                        if (task.active == true) {
                            return { ...task, active: !task.active };
                        }
                        if (task.taskCategory === "Personal") {
                            return { ...task, colorCategory: colors[0] };
                        } else if (task.taskCategory === "Hogar") {
                            return { ...task, colorCategory: colors[1] };
                        }
                        return task;
                    })
                );
            }
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
                    style={[styles.title, { borderWidth: 2, borderColor: errorTitle == true ? 'red' : titleFocused.title ? '#007AFF' : '#ccc' }]}
                    placeholder="Nombre de la tarea"
                    autoCapitalize="words"
                    onFocus={() => setTitleFocused({ title: true, description: false })}
                    onBlur={() => (validateForm(), setTitleFocused({ title: false, description: false }))}
                    keyboardType="default"
                    maxLength={21}
                    value={onChangeText.taskName}
                    onChangeText={(text) => onChangeTextFunc("taskName", text)}
                />
                <Text style={styles.error}>{errorTitle == true ? "Introduce un nombre de tarea mayor a 5 caracteres" : ""}</Text>
                <TextInput
                    style={[styles.textInput, { fontSize: Math.min(width * 0.08, 19), margin: 10, borderWidth: 2, borderColor: errorDescription == true ? 'red' : titleFocused.description ? '#007AFF' : '#ccc' }]}
                    placeholder="Descripcion "
                    multiline
                    onFocus={() => setTitleFocused({ title: false, description: true })}
                    onBlur={() => (validateForm(), setTitleFocused({ title: false, description: false }))}
                    autoCapitalize="words"
                    keyboardType="default"
                    numberOfLines={2}
                    maxLength={40}
                    value={onChangeText.taskDescription}
                    onChangeText={(description) => onChangeTextFunc("taskDescription", description)}
                />
                <Text style={styles.error}>{errorDescription == true ? "Introduce una descripcion mayor a 10 caracteres" : ""}</Text>
                <Text style={styles.TextInput}>Categoria</Text>
                <View style={{ flexDirection: 'row', padding: 10 }}>
                    {options.map((option) => {
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
                    <TouchableOpacity style={styles.blurContainer} onPress={() => handleAddTask()}>
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
    }
});
