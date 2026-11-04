import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "../screens/ProfileScreen";
import TaskScreen from "../screens/TaskScreen";


export type RootTabParamList = {
  HomeTab: undefined;
  ProfileTab: undefined;
  CalendarTab: undefined;
}

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: '#fff',
          tabBarStyle: {
            backgroundColor: '#121212',
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'ellipse-outline';
            if (route.name === 'HomeTab') {
              iconName = 'list-outline';
            } else if (route.name === 'ProfileTab') {
              iconName = 'person-outline';
            } else if (route.name === 'CalendarTab') {
              iconName = "calendar-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeScreen}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="ProfileTab"
          component={ProfileScreen}
          options={{ title: "Perfil" }}
        />

      </Tab.Navigator>

    </NavigationContainer >
  )
}