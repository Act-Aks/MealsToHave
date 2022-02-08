import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={{ padding: 15, backgroundColor: "green" }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
        <View style={{ flex: 1, padding: 15, backgroundColor: "blue" }}>
          <Text>Open up App.js to start working on your app!</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
