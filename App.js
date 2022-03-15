import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswaldFonts,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useLatoFonts,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";
import * as firebase from "firebase/compat";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyASM7vA3K64iOicfoVC6CpeSB_yiSD0IcQ",
  authDomain: "mealstohave.firebaseapp.com",
  projectId: "mealstohave",
  storageBucket: "mealstohave.appspot.com",
  messagingSenderId: "1049189282998",
  appId: "1:1049189282998:web:cfb96f174635ec8026e217",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
