import React from 'react';
import { useColorScheme } from 'react-native';

import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  PaperProvider,
} from 'react-native-paper';

import { StackNavigation } from './src/view/Navegation';

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
    <PaperProvider theme={colorScheme === 'dark' ? theme.darkTheme : theme.lightTheme}>
      <StackNavigation />
    </PaperProvider>
  )

}
