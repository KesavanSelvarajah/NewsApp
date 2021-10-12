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

export default function IntroDigestsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.digestsImage}
        source={require("../assets/digests.jpg")}
      />
      <View style={styles.digestsDescription}>
        <Text style={styles.digestsTitle}>Daily Digests</Text>
        <Text numberOfLines={2} style={styles.digestsSubtitle}>
          Know what happened today in a one single page
        </Text>
      </View>
      <View style={styles.digestsButtonContainer}>
        <AppButton title="Next" style={styles.digestsButton}></AppButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  digestsImage: {
    flex: 7,
    width: "75%",
    height: "60%",
    borderRadius: 15,
    marginTop: 75,
  },
  digestsDescription: {
    flex: 2,
    width: "100%",
  },
  digestsTitle: {
    color: colors.black,
    fontSize: 25,
    fontWeight: "bold",
    top: 10,
    alignSelf: "center",
  },
  digestsSubtitle: {
    width: "50%",
    color: colors.grey,
    fontSize: 14,
    top: 20,
    textAlign: "center",
    alignSelf: "center",
  },
  digestsButtonContainer: {
    flex: 1,
    width: "85%",
    justifyContent: "center",
    bottom: 10,
  },
});
