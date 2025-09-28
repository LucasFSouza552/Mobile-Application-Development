import React from 'react';
import { useColorScheme } from 'react-native';

import {
  PaperProvider,
  useTheme,
} from 'react-native-paper';

import { StackNavigation } from './src/view/Navegation';
import { ThemeProvider } from './src/Contexts/ThemeContext';

export default function App() {


  return (
    <ThemeProvider>
      <StackNavigation />
    </ThemeProvider>
  )

}
