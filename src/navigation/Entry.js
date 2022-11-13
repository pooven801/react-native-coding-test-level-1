
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '@screens/MainScreen';
import Form from '@screens/Form';
import ViewCatalog from '@screens/ViewCatalog';
import PokemonDetail from '@screens/PokemonDetail';

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
      <Stack.Screen name="ViewCatalog" component={ViewCatalog} />
      <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
    </Stack.Navigator>
  );
}
