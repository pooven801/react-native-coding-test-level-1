
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '@screens/MainScreen';
import Form from '@screens/Form';

const Stack = createNativeStackNavigator();

export default function Entry() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      >
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Form" component={Form} />
    </Stack.Navigator>
  );
}
