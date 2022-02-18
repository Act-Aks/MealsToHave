import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { AccountScreen } from "../../features/accoumt/screens/AccountScreen";
import { LoginScreen } from "../../features/accoumt/screens/LoginScreen";
import { RegistrationScreen } from "../../features/accoumt/screens/RegistrationScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegistrationScreen} />
  </Stack.Navigator>
);
