import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  StyleSheet,
  Text,
  Button,
} from "react-native";

import colors from "../../config/colors";
import AppButton from "../components/AppButton";

export default function IntroTrendsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.trendsImage}
        source={require("../assets/trends.jpg")}
      />
      <View style={styles.trendsDescription}>
        <Text style={styles.trendsTitle}>Top Ten Trends</Text>
        <Text numberOfLines={2} style={styles.trendsSubtitle}>
          Get to know what is trending in your surroundings
        </Text>
      </View>
      <View style={styles.trendsButtonContainer}>
        <AppButton
          title="Next"
          onPress={() => {
            props.navigation.navigate("Languages");
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
  trendsImage: {
    flex: 7,
    width: "75%",
    height: "60%",
    borderRadius: 15,
    marginTop: 75,
  },
  trendsDescription: {
    flex: 2,
    width: "100%",
  },
  trendsTitle: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "bold",
    top: 10,
    alignSelf: "center",
  },
  trendsSubtitle: {
    width: "50%",
    color: colors.grey,
    fontSize: 14,
    top: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  trendsButtonContainer: {
    flex: 1,
    width: "85%",
    justifyContent: "center",
    bottom: 10,
  },
});
