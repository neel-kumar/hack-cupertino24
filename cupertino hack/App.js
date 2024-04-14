import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";jmn
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Survey" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Survey" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;