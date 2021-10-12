import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";

import colors from "../../config/colors";
import AppButton from "../components/AppButton";
import AppCategoryButton from "../components/AppCategoryButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function NewsCategoriesScreen(props) {
  const initialState = {
    politics: false,
    entertainment: false,
    world: false,
    technology: false,
    sports: false,
    business: false,
    health: false,
    religion: false,
    travel: false,
    fashion: false,
  };

  const [state, setstate] = useState(initialState);

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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Select your favourite topics</Text>
        <Text style={styles.subtitle}>
          Select some of your favorite topics to let us suggest better news for
          you.
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <View style={styles.categoryRow}>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Politics"
              iconName="vote"
              iconSize={20}
              color={state.politics === true ? "primary" : "lightGrey"}
              iconColor={state.politics === true ? "white" : "grey"}
              textColor={state.politics === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  politics: state.politics === true ? false : true,
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Entertainment"
              iconName="movie"
              iconSize={20}
              color={state.entertainment === true ? "primary" : "lightGrey"}
              iconColor={state.entertainment === true ? "white" : "grey"}
              textColor={state.entertainment === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  entertainment: state.entertainment === true ? false : true,
                  politics: (state.politics = state.politics),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
        </View>
        <View style={styles.categoryRow}>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="World"
              iconName="globe-model"
              iconSize={20}
              color={state.world === true ? "primary" : "lightGrey"}
              iconColor={state.world === true ? "white" : "grey"}
              textColor={state.world === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  world: state.world === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Technology"
              iconName="gamepad-variant"
              iconSize={20}
              color={state.technology === true ? "primary" : "lightGrey"}
              iconColor={state.technology === true ? "white" : "grey"}
              textColor={state.technology === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  technology: state.technology === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
        </View>
        <View style={styles.categoryRow}>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Sports"
              iconName="football"
              iconSize={20}
              color={state.sports === true ? "primary" : "lightGrey"}
              iconColor={state.sports === true ? "white" : "grey"}
              textColor={state.sports === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  sports: state.sports === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Business"
              iconName="store"
              iconSize={20}
              color={state.business === true ? "primary" : "lightGrey"}
              iconColor={state.business === true ? "white" : "grey"}
              textColor={state.business === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  business: state.business === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
        </View>
        <View style={styles.categoryRow}>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Health"
              iconName="run"
              iconSize={20}
              color={state.health === true ? "primary" : "lightGrey"}
              iconColor={state.health === true ? "white" : "grey"}
              textColor={state.health === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  health: state.health === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Religion"
              iconName="hinduism"
              iconSize={20}
              color={state.religion === true ? "primary" : "lightGrey"}
              iconColor={state.religion === true ? "white" : "grey"}
              textColor={state.religion === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  religion: state.religion === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  travel: (state.travel = state.travel),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
        </View>
        <View style={styles.categoryRow}>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Travel"
              iconName="beach"
              iconSize={20}
              color={state.travel === true ? "primary" : "lightGrey"}
              iconColor={state.travel === true ? "white" : "grey"}
              textColor={state.travel === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  travel: state.travel === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  fashion: (state.fashion = state.fashion),
                })
              }
            />
          </View>
          <View style={styles.categoryColumn}>
            <AppCategoryButton
              title="Fashion"
              iconName="tshirt-v"
              iconSize={20}
              color={state.fashion === true ? "primary" : "lightGrey"}
              iconColor={state.fashion === true ? "white" : "grey"}
              textColor={state.fashion === true ? "white" : "grey"}
              onPress={() =>
                setstate({
                  fashion: state.fashion === true ? false : true,
                  politics: (state.politics = state.politics),
                  entertainment: (state.entertainment = state.entertainment),
                  world: (state.world = state.world),
                  technology: (state.technology = state.technology),
                  sports: (state.sports = state.sports),
                  business: (state.business = state.business),
                  health: (state.health = state.health),
                  religion: (state.religion = state.religion),
                  travel: (state.travel = state.travel),
                })
              }
            />
          </View>
        </View>
      </View>
      <View style={styles.categoryButtonContainer}>
        <AppButton
          title="Next"
          onPress={() => {
            props.navigation.navigate("Start");
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
  categoryRow: {
    flex: 1,
    flexDirection: "row",
  },
  categoryColumn: {
    flex: 1,
    margin: 10,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    color: colors.black,
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 40,
    alignSelf: "center",
  },
  subtitle: {
    color: colors.grey,
    fontSize: 13,
    marginTop: 10,
    marginStart: 20,
    marginEnd: 20,
  },
  categoryContainer: {
    flex: 6,
    marginTop: 50,
    marginStart: 20,
    marginEnd: 20,
    justifyContent: "space-evenly",
  },
  categoryButtonContainer: {
    width: "85%",
    margin: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
});
