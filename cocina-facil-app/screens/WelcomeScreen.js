import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'

export default function WelcomeScreen() {
  const navigation = useNavigation()
  return (
    <ImageBackground
      source={require('../assets/bg-welcome.png')}
      style={{ flex: 1 }}
    >
      <LinearGradient
        colors={['rgba(26, 32, 44, 0)', 'rgba(26, 32, 44, 1)']}
        style={{ flex: 1 }}
      >
        <SafeAreaView className='flex-1'>
          <View className='flex-1 flex justify-around my-4'>
            <View className='flex-row justify-center'>
              <Image
                resizeMode='contain'
                style={{ width: 350, borderRadius: 10 }}
                source={require('../assets/logo.png')}
              />
            </View>
            <View className='space-y-4'>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                className="py-3 mx-7 bg-opacity-20 rounded-3xl border border-white"
              >
                <Text className='text-xl font-bold text-center text-white'>
                  Registrarme
                </Text>
              </TouchableOpacity>
              <View className='flex-row justify-center'>
                <Text className='font-semibold text-slate-300'>¿Ya tienes una cuenta?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text className='font-semibold text-green-500'>
                    {' '}
                    Ingresar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  )
}
