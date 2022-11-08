import classNames from "classnames";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform, StatusBar, SafeAreaView } from "react-native";
import Home from "./screens/Home";

export default function App() {

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        className={classNames(
          "bg-black flex-1",
          Platform.OS === "android" ? `pt-[${StatusBar.currentHeight}]` : "pt-0"
        )}
      >
        <Home />
      </SafeAreaView>
    </>
  );
}
