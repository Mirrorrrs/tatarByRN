/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import NavigationWrapper from "./src/components/navigation_wrapper/NavigationWrapper";


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex:1}}>
      <StatusBar backgroundColor={"white"} barStyle="dark-content" />
      <View style={{flex:1}}>
        <NavigationWrapper/>

      </View>
    </SafeAreaView>
  );
};


export default App;
