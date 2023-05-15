import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.searchBar}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    padding: 16,
  },
  list: {
    padding: 16,
    backgroundColor: "blue",
    flex: 1,
  },
});
