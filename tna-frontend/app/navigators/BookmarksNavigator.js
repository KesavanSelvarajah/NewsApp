import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import BookmarksScreen from "../screens/BookmarksScreen";
import ShortAndSimpleScreen from "../screens/ShortAndSimpleScreen";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bookmarks"
        component={BookmarksScreen}
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

export default function BookmarksNavigator() {
  return <MyStack />;
}
