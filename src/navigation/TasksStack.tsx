import HomeScreen from '../screens/HomeScreen';
import TaskScreen from '../screens/TaskScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
export type TasksStackParamList = {
    ProfileTab: {
        taskCreated?: number;
        taskCompleted?: number;
    };
    HomeTab: undefined;
    Task: undefined
}


const Stack = createNativeStackNavigator<TasksStackParamList>()

export default function TasksStack() {
    return (
        <Stack.Navigator
            initialRouteName='HomeTab'
            screenOptions={{
                headerStyle: { backgroundColor: "#fff" },
                headerTintColor: "white",
                headerTitleStyle: { fontWeight: "bold" }
            }}
        >
            <Stack.Screen
                name='HomeTab'
                component={HomeScreen}
            />
            <Stack.Screen
                name='ProfileTab'
                component={ProfileScreen}
            />
            <Stack.Screen
                name='Task'
                component={TaskScreen}
            /> 
        </Stack.Navigator>
    );
}