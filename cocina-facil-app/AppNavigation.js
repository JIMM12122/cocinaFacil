import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SettingsScreen from './screens/SettingsScreen'
import { useAuth } from './context/AuthContext'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import TemplateScreen from './screens/TemplateScreen'
import RecoverPasswordScreen from './screens/RecoverPasswordScreen'

// Stack
const HomeStack = createNativeStackNavigator()
function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='TabsGroup' component={TabsGroup} />
      <HomeStack.Screen name='TweetDetailScreen' component={SettingsScreen} />
    </HomeStack.Navigator>
  )
}

// Tabs
const Tab = createBottomTabNavigator()
function TabsGroup() {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false }}>
      <Tab.Screen
        name='Explore'
        component={TemplateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='compass' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Ubicaciones'
        component={TemplateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='map-marker'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Cart'
        component={TemplateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='bag-checked'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Favoritos'
        component={TemplateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name='cards-heart'
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Notificaciones'
        component={TemplateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='bell' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

// Drawer
const Drawer = createDrawerNavigator()
function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='Principal' component={HomeStackGroup} />
      <Drawer.Screen
        name='Mis ordenes'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='format-list-bulleted'
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Mi perfil'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='account'
              size={size}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Direcciones de entrega'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='map-marker'
              focused={focused}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Métodos de pago'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='card-bulleted'
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Contactanos'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='email'
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Configuración'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='cog'
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Ayuda & FAQs'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, size, color) => (
            <MaterialCommunityIcons
              name='help-box'
              focused={focused}
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  )
}

// Auth
const AuthStack = createNativeStackNavigator()
function AuthNavigation() {
  return (
    <AuthStack.Navigator initialRouteName='Welcome'>
      <AuthStack.Screen
        name='Welcome'
        options={{ headerShown: false }}
        component={WelcomeScreen}
      />
      <AuthStack.Screen
        name='Login'
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <AuthStack.Screen
        name='SignUp'
        options={{ headerShown: false }}
        component={SignUpScreen}
      />
      <AuthStack.Screen
        name='RecoverPassword'
        options={{ headerShown: false }}
        component={RecoverPasswordScreen}
      />
    </AuthStack.Navigator>
  )
}

export default function Navigation() {
  const { user } = useAuth()

  return (
    <NavigationContainer>
      {user ? <DrawerGroup /> : <AuthNavigation />}
    </NavigationContainer>
  )
}
