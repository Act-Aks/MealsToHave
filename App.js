import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsScreen } from "./src/features/restaurants/screens/RestaurantsScreen";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "./src/components/utils/SafeAreaComponent";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { restaurantsRequest } from "./src/services/restaurants/restaurantsService";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    headerShown: false, // To remove the Header Code...
  };
};

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
);
const Maps = () => (
  <SafeArea>
    <Text>Maps</Text>
  </SafeArea>
);
const Restaurants = () => <Text>Restaurants</Text>;

export default function App() {
  const [OswaldLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });

  const [latodLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !latodLoaded) return null;

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            tabBarOptions={{
              activeTintColor: "blue",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Maps} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
