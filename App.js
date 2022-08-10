import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title='Android Native'></Button>
    </View>
  )
}

const nativeAndroid = () =>{
  return(
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title='Native here'></Button>
    </View>
  )
}
const Stack = createNativeStackNavigator()
const App = () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}></Stack.Screen>
        <Stack.Screen name='QR' component={nativeAndroid}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;