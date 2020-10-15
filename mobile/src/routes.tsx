import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanagesDetails from './pages/OrphanagesDetails';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen
          name="OrphanagesMap"
          component={OrphanagesMap}
          options={{
            headerShown: false
          }} />

        <Screen
          name="OrphanagesDetails"
          component={OrphanagesDetails}
          options={{
            headerShown: false
          }} />
      </Navigator>
    </NavigationContainer>
  )
}