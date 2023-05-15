import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { RestaurantScreen } from "./src/features/restaurants/screens/restaurant.screen";

export default function App() {
  return (
    <>
      <RestaurantScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
