import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDipUBA9RNCNgncP5BSo2d8yjOPNVdSxlU",
  authDomain: "mealstogo-6f262.firebaseapp.com",
  projectId: "mealstogo-6f262",
  storageBucket: "mealstogo-6f262.firebasestorage.app",
  messagingSenderId: "638810214616",
  appId: "1:638810214616:web:6805da567c41c5f282c7ad",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const auth = getAuth();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoldLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoldLoaded) {
    return <Text>Loading Fonts..</Text>;
  }

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
