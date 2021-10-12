import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import colors from "../../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function SignInScreen(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome Back 👋</Text>
      <Text numberOfLines={2} style={styles.subtitle}>
        We are happy to see you again. You can continue where you left off by
        logging in
      </Text>
      <View style={styles.textInputContainer}>
        <AppTextInput
          icon="email"
          placeholder="Email Address"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          textContentType="emailAddress"
        />
        <AppTextInput
          icon="lock"
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          textContentType="password"
        />
      </View>
      <View style={styles.signInButtonContainer}>
        <AppButton
          title="Sign In"
          onPress={() => {
            props.navigation.navigate("Main");
          }}
        ></AppButton>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.subtitle}>Don't have an account?</Text>
        <TouchableOpacity>
          <Text
            onPress={() => {
              props.navigation.navigate("SignUp");
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: colors.black,
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 40,
    marginStart: 20,
  },
  subtitle: {
    color: colors.grey,
    fontSize: 13,
    marginStart: 20,
    marginEnd: 20,
  },
  textInputContainer: {
    alignItems: "center",
  },
  signInButtonContainer: {
    width: "90%",
    margin: 20,
  },
  signUpContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  Signup: {
    color: Colors.grey,
    fontWeight: "bold",
  },
});
