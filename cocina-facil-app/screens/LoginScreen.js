import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { loginCustomer } from '../api'
import { useAuth } from '../context/AuthContext'

export default function LoginScreen() {
  const navigation = useNavigation()
  const { setUser } = useAuth()

  const handleSubmit = async (values) => {
    try {
      const res = await loginCustomer(values.email, values.password)
      console.log('Customer logged: ', res)
      setUser(res)
    } catch (error) {
      console.log('Error login customer: ', error)
    }
  }

  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={handleSubmit}>
      {({ values, handleSubmit, handleChange }) => (
        <View
          className='flex-1 bg-white'
          style={{ backgroundColor: themeColors.bg }}
        >
          <SafeAreaView className='flex '>
            <View className='flex-row justify-start'>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
              >
                <ArrowLeftIcon size='20' color='black' />
              </TouchableOpacity>
            </View>
            <View className='flex-row justify-center'>
              <Image
                source={require('../assets/images/login.png')}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </SafeAreaView>
          <View
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            className='flex-1 bg-white px-8 pt-8'
          >
            <View className='form space-y-2'>
              <Text className='text-gray-700 ml-4'>Email</Text>
              <TextInput
                className='p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3'
                placeholder='email'
                value={values.email}
                onChangeText={handleChange('email')}
              />
              <Text className='text-gray-700 ml-4'>Contraseña</Text>
              <TextInput
                className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                secureTextEntry
                placeholder='contraseña'
                value={values.password}
                onChangeText={handleChange('password')}
              />
              <TouchableOpacity className='flex items-end'>
                <Text className='text-gray-700 mb-5'>
                  ¿Olvidó su contraseña?
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                className='py-3 bg-yellow-400 rounded-xl'
                onPress={handleSubmit}
              >
                <Text className='text-xl font-bold text-center text-gray-700'>
                  Ingresar
                </Text>
              </TouchableOpacity>
            </View>
            <Text className='text-xl text-gray-700 font-bold text-center py-5'>
              O Ingresar con
            </Text>
            <View className='flex-row justify-center space-x-12'>
              <TouchableOpacity className='p-2 bg-gray-100 rounded-2xl'>
                <Image
                  source={require('../assets/icons/google.png')}
                  className='w-10 h-10'
                />
              </TouchableOpacity>
            </View>
            <View className='flex-row justify-center mt-7'>
              <Text className='text-gray-500 font-semibold'>
                ¿No tienes una cuenta?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text className='font-semibold text-yellow-500'>
                  {' '}
                  Registrarme
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}
