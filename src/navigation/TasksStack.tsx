import { createStaticNavigation } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import { Task } from '../components/TaskCreate';
import ProfileScreen from '../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type TasksStackParamList = {
    ProfileScreen: undefined;
    HomeScreen: undefined;
    TaskScreen: {
        taskList: Task[];
        setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
    }
}


const Stack = createNativeStackNavigator<TasksStackParamList>()

export default function TasksStack() {
    return (
        <Stack.Navigator
            initialRouteName='HomeScreen'
            screenOptions={{
                headerStyle: { backgroundColor: "#fff" },
                headerTintColor: "white",
                headerTitleStyle: { fontWeight: "bold" }
            }}
        >
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <Stack.Screen
                name='ProfileScreen'
                component={ProfileScreen}
            />
            <Stack.Screen
                name='TaskScreen'
                component={TaskScreen}
            />
        </Stack.Navigator>
    );
}