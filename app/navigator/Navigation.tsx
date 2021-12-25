// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home"
import TempratureConverter from '../screens/TempertureConverter';
import WeightTracker from '../screens/WeightTracker';
import WeightTrackerForm from '../screens/WeightTrackerForm';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="TempCoverter" component={TempratureConverter} />
        <Stack.Screen name="WeightTracker" component={WeightTracker} />
        <Stack.Screen name="WeightTrackerForm" component={WeightTrackerForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;