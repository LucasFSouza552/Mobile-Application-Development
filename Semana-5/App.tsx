import React, { useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useColorScheme, View } from 'react-native';

import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  PaperProvider,
} from 'react-native-paper';

import { ItemView } from "./src/view/ItemView";

const theme = {
  darkTheme: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: 'black',
      secondary: 'gray',
    }
  },
  lightTheme: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: 'white',
      secondary: 'gray',
    }
  }

};

export default function App() {

  const colorScheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <PaperProvider theme={colorScheme === 'dark' ? theme.darkTheme : theme.lightTheme}>
        <SafeAreaView style={{ width: "100%", height: "100%" }}>
          <ItemView />
        </SafeAreaView>
      </PaperProvider >
    </SafeAreaProvider>
  )

}
