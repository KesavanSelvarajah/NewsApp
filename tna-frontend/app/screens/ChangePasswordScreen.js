import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

import colors from "../../config/colors";

export default function ChangePasswordScreen(props) {
  const [currentpassword, setCPassword] = useState();
  const [newPassword, setNPassword] = useState();
  const [rNewPassword, setRNPassword] = useState();
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
      <Text style={styles.title}>Change Password</Text>
      <View style={styles.textInputContainer}>
        <AppTextInput
          icon="lock"
          placeholder="Current Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
          onChangeText={(text) => setCPassword(text)}
        />
        <AppTextInput
          icon="lock"
          placeholder="New Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="newPassword"
          onChangeText={(text) => setNPassword(text)}
        />
        <AppTextInput
          icon="lock"
          placeholder="Repeat New Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          textContentType="newPassword"
          onChangeText={(text) => setRNPassword(text)}
        />
      </View>
      <View style={styles.changePasswordButtonContainer}>
        <AppButton
          title="Change Password"
          onPress={() => {
            props.navigation.goBack(null);
          }}
        ></AppButton>
      </View>
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
    marginStart: 20,
    alignSelf: "center",
  },
  textInputContainer: {
    alignItems: "center",
  },
  changePasswordButtonContainer: {
    width: "90%",
    margin: 20,
  },
});
