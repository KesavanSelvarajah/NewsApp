import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DailyDigestScreen from "../screens/DailyDigestScreen";
import ShortAndSimpleScreen from "../screens/ShortAndSimpleScreen"

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Digests"
        component={DailyDigestScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Shorts"
        component={ShortAndSimpleScreen}
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
