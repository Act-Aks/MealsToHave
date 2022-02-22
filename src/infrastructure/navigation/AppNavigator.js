import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeArea } from "../../components/utils/SafeAreaComponent";
import { Button, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./RestaurantNavigator";
import { MapScreen } from "../../features/map/screens/MapScreen";
import { AuthenticationContext } from "../../services/authentication/authenticationContext";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { FavouritesContextProvider } from "../../services/favourites/favouritesContext";

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

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};

export const AppNavigator = () => {
  return (
    <>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
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
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};
