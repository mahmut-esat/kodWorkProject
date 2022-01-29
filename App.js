import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";

import JobProvider from "./src/context/Provider";
import Jobs from "./src/pages/Jobs";
import Detail from "./src/pages/Detail";
import Favorite from "./src/pages/Favorite";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function JobStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Jobs"
        component={Jobs}
        options={{
          title: "Jobs",
          headerTitleAlign: "center",
          headerTintColor: "#d32f2f",

        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({ route }) => ({
          title: route.params.name,
          headerTintColor: "#d32f2f",
          headerTitleStyle: {
            fontSize: 17
          }
        })}
      />
    </Stack.Navigator>
  );
}

export function App() {
  return (
    <JobProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Jobs") {
                iconName = focused ? "home" : "home-outline";
              } else if (route.name === "Favorite") {
                iconName = focused ? "heart" : "heart-outline";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#d32f2f",
            tabBarInactiveTintColor: "#d32f2f",
          })}
        >
          <Tab.Screen
            name="Jobs"
            component={JobStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Favorite" component={Favorite} />
        </Tab.Navigator>
      </NavigationContainer>
    </JobProvider>
  );
}

export default App;