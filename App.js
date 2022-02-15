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
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantsContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import { FavouritesContextProvider } from "./src/services/favourites/favouritesContext";
import { Navigation } from "./src/infrastructure/navigation";

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
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
