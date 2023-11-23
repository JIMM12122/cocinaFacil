import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

import WelcomeScreen from './screens/WelcomeScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import SettingsScreen from './screens/SettingsScreen'
import { useAuth } from './context/AuthContext'
import DishListScreen from './screens/DishListScreen'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function TabNavigation() {
  return (
    <Tab.Navigator initialRouteName='Settings'>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarLabel: 'Feed',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='settings-sharp' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
        name='Welcome'
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <Stack.Screen
        name='Login'
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name='SignUp'
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <Stack.Screen
        name='DishListScreen'
        options={{ headerShown: false }}
        component={DishListScreen}
      />
    </Stack.Navigator>
  )
}

export default function Navigation() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? <TabNavigation /> : <StackNavigation />}
    </NavigationContainer>
  )
}
