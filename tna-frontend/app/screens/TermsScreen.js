import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";

export default function TermsScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={25}
        color="black"
        style={styles.icon}
        onPress={() => {
          props.navigation.goBack(null);
        }}
      />
      <Text style={styles.title}>Terms & Conditions</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium
        quam vulputate. Egestas quis ipsum suspendisse ultrices gravida dictum
        fusce. Facilisis leo vel fringilla est ullamcorper eget. Justo eget
        magna fermentum iaculis eu non diam. Vitae semper quis lectus nulla at
        volutpat. Tellus cras adipiscing enim eu turpis egestas pretium aenean.
        Sed ullamcorper morbi tincidunt ornare massa eget. Nunc id cursus metus
        aliquam eleifend. Sed ullamcorper morbi tincidunt ornare massa eget
        egestas purus. Egestas maecenas pharetra convallis posuere morbi leo
        urna. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Felis
        eget nunc lobortis mattis. Pellentesque diam volutpat commodo sed
        egestas. Tempus urna et pharetra pharetra. {"\n"} {"\n"} Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Sed risus pretium quam
        vulputate. Egestas quis ipsum suspendisse ultrices gravida dictum fusce.
        Facilisis leo vel fringilla est ullamcorper eget. Justo eget magna
        fermentum iaculis eu non diam. Vitae semper quis lectus nulla at
        volutpat. Tellus cras adipiscing enim eu turpis egestas pretium aenean.
        Sed ullamcorper morbi tincidunt ornare massa eget. Nunc id cursus metus
        aliquam eleifend. Sed ullamcorper morbi tincidunt ornare massa eget
        egestas purus. Egestas maecenas pharetra convallis posuere morbi leo
        urna. Ipsum nunc aliquet bibendum enim facilisis gravida neque. Felis
        eget nunc lobortis mattis. Pellentesque diam volutpat commodo sed
        egestas. Tempus urna et pharetra pharetra.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 45,
  },
  title: {
    color: colors.black,
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 40,
    alignSelf: "center",
  },
  subtitle: {
    margin: 40,
  },
});
