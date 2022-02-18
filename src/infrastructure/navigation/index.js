import React, { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authenticationContext";
import { AppNavigator } from "./AppNavigator";
import { AccountNavigator } from "./AccountNavigator";
import { NavigationContainer } from "@react-navigation/native";

export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
