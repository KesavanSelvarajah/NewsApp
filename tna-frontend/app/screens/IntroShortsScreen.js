import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Text } from "react-native";

import colors from "../../config/colors";
import AppButton from "../components/AppButton";

export default function IntroShortsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.shortsImage}
        source={require("../assets/shorts.jpg")}
      />
      <View style={styles.shortsDescription}>
        <Text style={styles.shortsTitle}>Short {"&"} Simple</Text>
        <Text numberOfLines={2} style={styles.shortsSubtitle}>
          Save your time with our short and simple news
        </Text>
      </View>
      <View style={styles.shortsButtonContainer}>
        <AppButton
          title="Next"
          onPress={() => {
            props.navigation.navigate("Digests");
          }}
        ></AppButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  shortsImage: {
    flex: 7,
    width: "75%",
    height: "60%",
    borderRadius: 15,
    marginTop: 75,
  },
  shortsDescription: {
    flex: 2,
    width: "100%",
  },
  shortsTitle: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "bold",
    top: 10,
    alignSelf: "center",
  },
  shortsSubtitle: {
    width: "50%",
    color: colors.grey,
    fontSize: 14,
    top: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  shortsButtonContainer: {
    flex: 1,
    width: "85%",
    justifyContent: "center",
    bottom: 10,
  },
});
