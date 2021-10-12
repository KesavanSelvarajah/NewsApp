import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

//Stacks

import DigestsNavigator from "./DigestsNavigator";
import TrendsNavigator from "./TrendsNavigator";
import ProfileNavigator from "./ProfileNavigator";
import BookmarksNavigator from "./BookmarksNavigator";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Digests"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: true,
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen
        name="Digests"
        component={DigestsNavigator}
        options={{
          tabBarIcon: () => {
            <Icon
              name="newspaper-variant-outline"
              color={colors}
              size={20}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Trends"
        component={TrendsNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            <MaterialCommunityIcons
            name="home" color={color} size={30} />;
          },
        }}
      />
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            <MaterialCommunityIcons
              name="bookmark"
              color={colors}
              size={30}
            />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => {
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={30}
            />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
