import { useState } from 'react';
import { Task } from './TaskCreate';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import { lightTheme } from '../constants/theme';

export interface TaskListProps2 {
    type: string;
    TaskList: (Task & { createdAt: Date, active: boolean })[];
    setTaskList: React.Dispatch<React.SetStateAction<(Task & { createdAt: Date, active: boolean })[]>>;
    taskCompleted: (Task & { createdAt: Date, active: boolean })[];
    setTaskCompleted: React.Dispatch<React.SetStateAction<(Task & { createdAt: Date, active: boolean })[]>>
}


export default function TaskList({ TaskList, taskCompleted, setTaskList, setTaskCompleted, type }: TaskListProps2 & any) {
    const [select, setSelect] = useState("");
    let Array = type == "TaskList" ? TaskList : taskCompleted
    let setArray = type == "TaskList" ? setTaskList : setTaskCompleted
    const taskCompletedFunction = (item: any) => {
        const ArrayAdd = type == "TaskList" ? taskCompleted : TaskList
        let ArrayDelete = type == "TaskList" ? TaskList : taskCompleted;
        let setArrayAdd = type == "TaskList" ? setTaskCompleted : setTaskList
        let setArrayDelete = type == "TaskList" ? setTaskList : setTaskCompleted
        const search = ArrayAdd.find((elemento: any) => elemento.title == item.title)
        if (search) {
            return
        } else {
            setArrayAdd((prevstate: any) => {
                return [...prevstate, item]
            });
            const search = ArrayDelete.find((elemento: any) => elemento.title == item.title)
            if (search) {
                setArrayDelete((prevstate: any) => {
                    return prevstate.filter((element: any) => element.title !== item.title)
                });
            } else {
                return
            }
        }
    }

    return (
        <FlatList
            style={{ height: 415 }}
            data={Array}
            keyExtractor={(item) => item.createdAt}
            ListHeaderComponent={
                <View>
                    <Text style={{ fontSize: 35, paddingLeft: 10, margin: 5, color: lightTheme.text }}>{type == "TaskList" ? "Mis tareas" : "Tareas completadas"}</Text>
                </View >
            }
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={[styles.item, styles.rowCenter, { borderColor: item.colorCategory, borderStartWidth: 8, height: "auto", margin: 15 }, select !== "" ? item.active == false ? { opacity: 0.3 } : "" : ""]}
                    onPress={() => setArray((prevstate: any) => {
                        return prevstate.map((elemento: any) => {
                            if (select == "" || select == item.taskName) {
                                if (elemento === item) {
                                    if (elemento.active == false) {
                                        setSelect(item.taskName)
                                        return { ...elemento, active: !elemento.active };
                                    } else if (elemento.active == true) {
                                        setSelect("")
                                        return { ...elemento, active: !elemento.active };
                                    }
                                }
                            }
                            return elemento;
                        })
                    })}
                >
                    <View style={styles.rowCenter}>
                        <TouchableOpacity onPress={() => taskCompletedFunction(item)}>
                            <View style={{ padding: 10, paddingTop: 23, margin: 4, justifyContent: "center", alignItems: "center", alignContent: "center", alignSelf: "center" }}>
                                {type == "TaskList" ? <Icons iconName="square" /> : <Icons iconName="check-square" />}
                            </View>
                        </TouchableOpacity>
                        <View style={{ padding: 10, width: "85%" }}>
                            <Text style={styles.title}>{item.title}</Text>
                            {item.active == true ? <Text style={styles.title}>{item.description}</Text> : ""}
                            <View style={[styles.rowBeetween, { margin: 10 }]}>
                                <View style={{ justifyContent: "flex-start", padding: 5 }}>
                                    <Text style={styles.subTitle}>{JSON.stringify(item.createdAt).split("T")[0].substring(3)}</Text>
                                </View>
                                <Text style={[styles.subTitle, { backgroundColor: "#d0d0d19f", borderColor: "#d0d0d19f", borderWidth: 3, borderRadius: 6 }]}>{item.category}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            )
            }
        />
    )
}

function Icons({ iconName }: any) {
    return (
        <Feather name={iconName} size={34} color="black" />
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
        color: lightTheme.text
    },
    subTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: "flex-start",
        color: lightTheme.text
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
        alignItems: "center"
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});