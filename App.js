import 'react-native-gesture-handler';
import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AddItemScreen from './screens/AddItemScreen';
import ItemDetailsScreen from './screens/ItemDetailsScreen';
import WelcomScreen from './screens/WelcomScreen';
import {TodosProvider} from './screens/components/TodoContext';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <TodosProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Stack.Navigator
          initialRouteName="WelcomScreen"
          screenOptions={{
            headerStyle: {backgroundColor: '#000'},
            headerTintColor: '#fff',
            headerTitleStyle: {color: '#fff'},
          }}>
          <Stack.Screen
            name="WelcomScreen"
            component={WelcomScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="AddItem" component={AddItemScreen} options={{}} />
          <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodosProvider>
  );
}

export default App;
