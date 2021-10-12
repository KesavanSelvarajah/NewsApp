import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./app/navigators/Main";

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  );
}

  // return <WelcomeScreen/>;
  // return <IntroShortsScreen/>; 
  // return <IntroDigestsScreen/>;
  // return <IntroTrendsScreen/>;
  // return <GetStartScreen/>;
  // return <LanguageScreen/>;  
  // return <NewsCategoriesScreen/>;
  // return <SignInScreen/>; 
  // return <SignUpScreen/>; 
  // return <TopTenTrendingScreen/>; //
  // return <DailyDigestScreen/>; //
  // return <BookmarksScreen/>; //
  // return <ShortAndSimpleScreen/>;
  // return <ProfileScreen/>;
  // return <ChangePasswordScreen/>;  
  // return <TermsScreen/>;  
