import React, { useState } from 'react';

import Item from './src/models/item';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';

import { ItemView } from "./src/view/ItemView";

export default function App() {



  return (

    <ItemView />
  )

}
