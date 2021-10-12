import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";

import colors from "../../config/colors";

function Card({ title, category, image, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="cover"
            style={styles.cardImage}
            source={{ uri: image ? image : "https://picsum.photos/200" }}
          />
        </View>
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.trendCategory}>
            {category}
          </Text>
          <Text numberOfLines={3} style={styles.trendTitle}>
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
    borderRadius: 12,
    flexDirection: "row",
  },
  imageContainer: {
    flex: 1,
    padding: "3%",
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    alignSelf: "center",
  },
  detailsContainer: {
    flex: 2,
    padding: 20,
  },
  trendCategory: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
  },
  trendTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 5,
  },
});

export default Card;
