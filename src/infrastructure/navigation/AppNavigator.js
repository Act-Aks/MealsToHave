import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utils/SafeAreaComponent";
import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./RestaurantNavigator";
import { MapScreen } from "../../features/map/screens/MapScreen";

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

const Restaurants = () => <Text>Restaurants</Text>;

export const AppNavigator = () => {
  const [OswaldLoaded] = useOswaldFonts({
    Oswald_400Regular,
  });

  const [latodLoaded] = useLatoFonts({
    Lato_400Regular,
  });

  if (!OswaldLoaded || !latodLoaded) return null;

  return (
    <>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          activeTintColor: "blue",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </>
  );
};
