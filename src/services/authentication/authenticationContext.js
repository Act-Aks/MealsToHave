import React, { useState, useEffect, createContext } from "react";
import * as firebase from "firebase/compat";
import { loginRequest } from "./authenticationService";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const onLogin = (email, password) => {
    loginRequest(email, password)
      .then((userResponse) => {
        setUser(userResponse);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
        set;
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
