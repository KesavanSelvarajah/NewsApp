import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";

function AppCategoryButton({
  title,
  onPress,
  color = "primary",
  iconName,
  iconSize,
  iconColor = "grey",
  textColor = "grey",
  fontSize,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <MaterialCommunityIcons
        name={iconName}
        color={iconColor}
        size={iconSize}
        style={styles.icon}
      />
      <Text
        style={[
          styles.text,
          { color: colors[textColor] },
          { fontSize: fontSize },
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: colors.primary,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    width: "100%",
  },
  icon: {
    padding: 4,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textTransform: "none",
    fontWeight: "bold",
    padding: 7,
  },
});

export default AppCategoryButton;
