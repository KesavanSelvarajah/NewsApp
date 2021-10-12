import React, { useState } from "react";
import { StyleSheet, Image, View, Text, SafeAreaView } from "react-native";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ShortAndSimpleScreen(props) {
  const [item, setItem] = useState(props.route.params.item);

  return (
    <SafeAreaView>
      <Image style={styles.image} source={{ uri: item.image ? item.image : "https://picsum.photos/200" }} />
      <MaterialCommunityIcons
        name="arrow-left"
        size={25}
        color="white"
        style={styles.icon}
        onPress={() => {
          props.navigation.goBack(null)
        }}
      />
      <View style={styles.detailsContainer}>
        <View style={styles.category}>
          <Text style={styles.categoryText}>{item.category.name}</Text>
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.description}</Text>
        <Text style={styles.source}>Source: {item.sourceName}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    color: colors.white,
    left: 20,
    top: 30,
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  category: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  categoryText: {
    color: colors.white,
  },
  title: {
    paddingTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    fontStyle: "normal",
    color: colors.grey,
    paddingTop: 20,
  },
  source: {
    paddingTop: 20,
    color: colors.primary,
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ShortAndSimpleScreen;
