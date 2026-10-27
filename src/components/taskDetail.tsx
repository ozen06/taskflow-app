import { useState } from 'react';
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
}


export default function TaskDetail({ taskList }: TaskListProps & any) {

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    data={taskList}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={[styles.item]}
                            onPress={() => { }}
                        >
                            <View style={styles.rowCenter}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 85 }}>◻</Text>
                                </TouchableOpacity>
                                <View style={{ padding: 20 }}>
                                    <Text style={styles.title}>{item.taskName}</Text>
                                    <Text style={styles.title}>{item.taskCategory}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#0f0000"
    },
    item: {
        padding: 20,
        margin: 15,
        borderRadius: 15,
        borderWidth: 2,
    },
    rowCenter: {
        flexDirection: "row",
        alignSelf: "stretch",
        alignItems: "center",
        justifyContent: "center"
    }
});