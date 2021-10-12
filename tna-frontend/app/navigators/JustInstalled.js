import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import IntroShortsScreen from "../screens/IntroShortsScreen"
import IntroDigestsScreen from "../screens/IntroDigestsScreen"
import IntroTrendsScreen from "../screens/IntroTrendsScreen"
import GetStartScreen from "../screens/GetStartScreen"
import LanguageStartScreen from "../screens/LanguageStartScreen"
import NewsCategoriesStartScreen from "../screens/NewsCategoriesStartScreen"
import SignInScreen from "../screens/SignInScreen"
import SignUpScreen from "../screens/SignUpScreen"
import Main from "../navigators/Main";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shorts"
        component={IntroShortsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Digests"
        component={IntroDigestsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Trends"
        component={IntroTrendsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Languages"
        component={LanguageStartScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Categories"
        component={NewsCategoriesStartScreen}
        options={{
          headerShown: false,
        }}
      />
        <Stack.Screen
          name="Start"
          component={GetStartScreen}
          options={{
            headerShown: false,
          }}
        />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export default function DigestsNavigator() {
  return <MyStack />;
}
