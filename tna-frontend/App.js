import React from 'react';
import BookmarksScreen from './app/screens/BookmarksScreen';
import ChangePasswordScreen from './app/screens/ChangePasswordScreen';
import DailyDigestScreen from './app/screens/DailyDigestScreen';
import GetStartScreen from './app/screens/GetStartScreen';
import IntroDigestsScreen from './app/screens/IntroDigestsScreen';
import IntroShortsScreen from './app/screens/IntroShortsScreen';
import IntroTrendsScreen from './app/screens/IntroTrendsScreen';
import LanguageScreen from './app/screens/LanguageScreen';
import NewsCategoriesScreen from './app/screens/NewsCategoriesScreen';
import ProfileScreen from './app/screens/ProfileScreen';
import ShortAndSimpleScreen from './app/screens/ShortAndSimpleScreen';
import SignInScreen from './app/screens/SignInScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import TermsScreen from './app/screens/TermsScreen';
import TopTenTrendingScreen from './app/screens/TopTenTrendingScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  // return <WelcomeScreen/>;
  // return <IntroShortsScreen/>; 
  // return <IntroDigestsScreen/>;
  // return <IntroTrendsScreen/>;
  // return <GetStartScreen/>;
  // return <LanguageScreen/>;  
  // return <NewsCategoriesScreen/>;
  return <SignInScreen/>; 
  // return <SignUpScreen/>; 
  // return <TopTenTrendingScreen/>;
  // return <DailyDigestScreen/>;
  // return <BookmarksScreen/>;
  // return <ShortAndSimpleScreen/>;
  // return <ProfileScreen/>;
  return <ChangePasswordScreen/>;  
  // return <TermsScreen/>;  
}