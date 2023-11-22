import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen'
import ResturantScreen from './screens/ResturantScreen'
import CartScreen from './screens/CartScreen'
import PreparingOrderScreen from './screens/PreparingOrderScreen'
import DeliveryScreen from './screens/DeliveryScreen'
import Categories from './components/categories'
import DishListScreen from './screens/DishListScreen'
const Stack = createNativeStackNavigator()

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Resturant' component={ResturantScreen} />

        <Stack.Screen
          name='Cart'
          options={{ presentation: 'modal', headerShown: false }}
          component={CartScreen}
        />

        <Stack.Screen
          name='PreparingOrder'
          options={{ presentation: 'fullScreenModal', headerShown: false }}
          component={PreparingOrderScreen}
        />

        <Stack.Screen
          name='Delivery'
          options={{ presentation: 'fullScreenModal', headerShown: false }}
          component={DeliveryScreen}
        />

        <Stack.Screen
          name='Categories'
          options={{ presentation: 'modal', headerShown: false }}
          component={Categories}
        />

        <Stack.Screen
          name='DishListScreen'
          options={{ presentation: 'modal', headerShown: false }}
          component={DishListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
