import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useAuth } from './context/AuthContext'
import SignUpScreen from './screens/SignUpScreen'
import LoginScreen from './screens/LoginScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import HomeScreen from './screens/HomeScreen'
import TemplateScreen from './screens/TemplateScreen'
import RecoverPasswordScreen from './screens/RecoverPasswordScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import AddNewAddressScreen from './screens/AddNewAddress'
import EditProfileScreen from './screens/EditProfileScreen'
import DishListScreen from './screens/DishListScreen'
import Cart from './screens/Cart'
import { Image, Text, View } from 'react-native'

// Stack
const HomeStack = createNativeStackNavigator()
function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name='TabsGroup' component={TabsGroup} />
      <HomeStack.Screen name='DishListScreen' component={DishListScreen} />
    </HomeStack.Navigator>
  )
}

// Tabs
const Tab = createBottomTabNavigator()
function TabsGroup() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FE724C',
      }}
    >
      <Tab.Screen
        name='Explore'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='compass' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Ubicaciones'
        component={Cart}
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
        component={Cart}
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
        component={FavoritesScreen}
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

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          alignItems: 'center',
          padding: 20,
          justifyContent: 'center',
          gap: 5,
        }}
      >
        <Image
          resizeMode='contain'
          source={require('./assets/user.png')}
          style={{ width: 165, height: 110 }}
        />
        <Text style={{ fontWeight: 'bold' }}>Alejandro Navarro Bonilla</Text>
        <Text>alejandro@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

// Drawer
const Drawer = createDrawerNavigator()
function DrawerGroup() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{ headerShown: false, drawerActiveTintColor: '#FE724C' }}
    >
      <Drawer.Screen
        name='Explorar'
        component={HomeStackGroup}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='compass'
              focused={focused}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Mis ordenes'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='format-list-bulleted'
              focused={focused}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Mi perfil'
        component={EditProfileScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='account'
              size={25}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Direcciones de entrega'
        component={AddNewAddressScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='map-marker'
              focused={focused}
              size={25}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Métodos de pago'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='card-bulleted'
              focused={focused}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Contactanos'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='email'
              focused={focused}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Configuración'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='cog'
              focused={focused}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Drawer.Screen
        name='Ayuda & FAQs'
        component={TemplateScreen}
        options={{
          drawerIcon: (focused, color) => (
            <MaterialCommunityIcons
              name='help-box'
              focused={focused}
              color={color}
              size={25}
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
      {!user ? <DrawerGroup /> : <AuthNavigation />}
    </NavigationContainer>
  )
}
