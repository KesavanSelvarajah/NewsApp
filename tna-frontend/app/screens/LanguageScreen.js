import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../config/colors";
import AppSettingsButton from "../components/AppSettingsButton";
import AppButton from "../components/AppButton";

export default function LanguageScreen(props) {
  const [selectedLanguage, setSelectedLanguage] = useState(props.route.params.item.language);
  
  return (
    <SafeAreaView style={styles.container}>
      <MaterialCommunityIcons
        name="arrow-left"
        size={25}
        color="black"
        style={styles.icon}
        onPress={() => {
          props.navigation.goBack(null)
        }}
      />
      <Text style={styles.title}>Languages</Text>
      <View style={styles.languagesContainer}>
        <AppSettingsButton
          title="English"
          color={selectedLanguage === 'English' ? "primary" : "lightGrey"}
          iconName=""
          iconColor="grey"
          iconSize={26}
          textColor={selectedLanguage === 'English' ? "white" : "grey"}
          fontSize={16}
          onPress={() => setSelectedLanguage('English')}
        />
        <AppSettingsButton
          title="Sinhala (සිංහල)"
          color={selectedLanguage === 'Sinhala' ? "primary" : "lightGrey"}
          iconName=""
          iconColor="grey"
          iconSize={26}
          textColor={selectedLanguage === 'Sinhala' ? "white" : "grey"}
          fontSize={16}
          onPress={() => setSelectedLanguage('Sinhala')}
        />
        <AppSettingsButton
          title="Tamil (தமிழ்)"
          color={selectedLanguage === 'Tamil' ? "primary" : "lightGrey"}
          iconName=""
          iconColor="grey"
          iconSize={26}
          textColor={selectedLanguage === 'Tamil' ? "white" : "grey"}
          fontSize={16}
          onPress={() => setSelectedLanguage('Tamil')}
        />
      </View>
      <View style={styles.languagesButtonContainer}>
        <AppButton
          title="Save"
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
    alignSelf: "center",
  },
  languagesContainer: {
    flex: 2,
    width: "90%",
    alignSelf: "center",
    paddingTop: 20,
  },
  languagesButtonContainer: {
    width: "90%",
    margin: 20,
  },
});
