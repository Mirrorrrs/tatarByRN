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
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {Provider} from "react-redux";
import NavigationWrapper from "./src/components/navigation_wrapper/NavigationWrapper";
import store from "./src/store";


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (

      <Provider store={store}>
        <SafeAreaView style={{flex:1}}>
          <StatusBar backgroundColor={"white"} barStyle="dark-content" />
          <View style={{flex:1}}>
            <NavigationWrapper/>

          </View>
        </SafeAreaView>
      </Provider>

  );
};


export default App;
