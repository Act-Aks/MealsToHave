import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantNavigator } from "./RestaurantNavigator";
import { MapScreen } from "../../features/map/screens/MapScreen";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { FavouritesContextProvider } from "../../services/favourites/favouritesContext";
import { SettingsNavigator } from "./SettingsNavigator";
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
              <Tab.Screen name="Settings" component={SettingsNavigator} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};
