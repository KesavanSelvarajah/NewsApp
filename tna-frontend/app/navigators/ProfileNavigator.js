import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/ProfileScreen";
import LanguageScreen from "../screens/LanguageScreen";
import NewsCategoriesScreen from "../screens/NewsCategoriesScreen";
import ChangePasswordScreen from "../screens/ChangePasswordScreen";
import TermsScreen from "../screens/TermsScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Languages"
        component={LanguageScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FavouriteCategories"
        component={NewsCategoriesScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ChangePassword"
        component={ChangePasswordScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Terms"
        component={TermsScreen}
        options={{
          headerShown: false,
        }}
      />      
    </Stack.Navigator>
  )
}

export default function ProfileNavigator() {
  return <MyStack />;
}
