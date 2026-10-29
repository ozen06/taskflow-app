import { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    View
} from 'react-native';

interface Task {
    taskName: string;
    taskDescription: string;
    taskCategory: string;
}
interface TaskListProps {
    taskList: (Task & { createdAt: Date })[];
    setTaskList: React.Dispatch<React.SetStateAction<(Task & { createdAt: Date })[]>>;
}

export default function TaskList({ taskList, setTaskList }: TaskListProps & any) {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35, paddingLeft: 10 }}>Tareas</Text>
            {taskList[0] ? <TaskFlatlist setTaskList={setTaskList} taskList={taskList} /> : <EmptyTask />}
        </View >
    )
}

function EmptyTask() {
    return (
        <View>
            <Text style={[styles.title, styles.centerContainer, { textAlign: "center", textAlignVertical: "center" }]}>No hay tareas</Text>
        </View>
    )
}

function TaskFlatlist({ taskList, setTaskList }: TaskListProps & any) {
    return (
        <View style={{height: 415}}>
            <FlatList
                data={taskList}
                keyExtractor={(item) => item.createdAt}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.item, styles.rowCenter, { borderColor: item.colorCategory, borderStartWidth: 8, height: "auto" }]}
                        onPress={() => setTaskList((prevstate: any) => {
                            return prevstate.map((elemento: any) => {
                                if (elemento === item) {
                                    return { ...elemento, active: !elemento.active };
                                }
                                return elemento;
                            })
                        })}
                    >
                        <View style={styles.rowCenter}>
                            <TouchableOpacity >
                                <Text style={{ fontSize: 55 }}>◻</Text>
                            </TouchableOpacity>
                            <View style={{ padding: 10, width: "85%" }}>
                                <Text style={styles.title}>{item.taskName}</Text>
                                {item.active == true ? <Text style={styles.title}>{item.taskDescription}</Text> : ""}
                                <View style={[styles.rowBeetween, { margin: 10 }]}>
                                    <View style={{ justifyContent: "flex-start", padding: 5 }}>
                                        <Text style={styles.subTitle}>{JSON.stringify(item.createdAt).split("T")[1].substring(0, 8)}</Text>
                                    </View>
                                    <Text style={[styles.subTitle, { backgroundColor: "#d0d0d19f", borderColor: "#d0d0d19f", borderWidth: 3, borderRadius: 6 }]}>{item.taskCategory}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 480,
        padding: 5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "left",
        color: "#0f0000"
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: "flex-start",
        color: "#0f0000"
    },
    item: {
        padding: 5,
        margin: 15,
        borderRadius: 15,
        borderWidth: 2,
        backgroundColor: "#fff"
    },
    rowCenter: {
        flex: 1,
        flexDirection: "row",
    },
    rowBeetween: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end"
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});