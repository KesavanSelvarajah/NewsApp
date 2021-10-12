import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TopTenTrendingScreen from "../screens/TopTenTrendingScreen";
import ShortAndSimpleScreen from "../screens/ShortAndSimpleScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Trends"
        component={TopTenTrendingScreen}
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

export default function TrendsNavigator() {
  return <MyStack />;
}
