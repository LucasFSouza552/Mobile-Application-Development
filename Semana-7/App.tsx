import React from 'react';

import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { StackNavigation } from './src/view/Navegation';
import { ThemeProvider } from './src/Contexts/ThemeContext';

export default function App() {


  return (
    <ThemeProvider>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <StackNavigation />
      </SafeAreaProvider >
    </ThemeProvider>
  )

}
