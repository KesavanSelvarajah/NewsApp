import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.button}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={colors.grey}
          size={25}
          style={styles.icon}
        />
      )}
      <TextInput style={styles.text} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.lightGrey,
    borderRadius: 14,
    padding: 10,
    width: "90%",
    marginTop: 20,
  },
  icon: {
    alignSelf: "center",
    paddingStart: 10,
    paddingEnd: 10,
  },
  text: {
    flex: 4,
    color: colors.black,
    fontSize: 14,
    textTransform: "none",
    fontWeight: "bold",
    padding: 2,
  },
});

export default AppTextInput;
