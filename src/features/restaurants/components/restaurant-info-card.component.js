import React from "react";
import { Card } from "react-native-paper";
import { StyleSheet } from "react-native";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restuarant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Random St",
    isOpenNow = true,
    rating = 4,
    isTemporarilyClosed,
  } = restaurant;
  return (
    <Card elevation={5} style={styles.card}>
      <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Card.Title title={name} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {},
  cover: {},
});
