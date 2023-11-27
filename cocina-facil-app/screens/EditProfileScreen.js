import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { showMessage } from 'react-native-flash-message'
import * as Yup from 'yup'
import { themeColors } from '../theme'
import GeneralButton from '../components/GeneralButton'
import { useAuth } from '../context/AuthContext'
import { saveCustomer, updateCostumer } from '../api'

const EditProfileSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy Corto')
    .max(50, 'Muy Largo')
    .required('Requerido'),
  phone: Yup.string().min(8, 'Formato incorrecto').max(8, 'Formato incorrecto'),
  email: Yup.string().email('Email invalido').required('Requerido'),
})

const EditProfileScreen = () => {
  const navigation = useNavigation()
  const { user, setUser } = useAuth()

  const handleOnSubmit = async (values, { resetForm }) => {
    try {
      values = { ...values, _id: user.customerId }
      const response = await updateCostumer(values)

      console.log('Perfil actualizado:', values, response)
      setUser({ ...user, ...values })
      showMessage({
        message: 'Perfil actualizado correctamente',
        type: 'success',
      })
    } catch (error) {
      console.error('Error al actualizar el perfil:', error)
      showMessage({
        message: 'Error al actualizar el perfil',
        type: 'danger',
      })
    }
  }

  return (
    <Formik
      initialValues={user}
      validationSchema={EditProfileSchema}
      onSubmit={handleOnSubmit}
    >
      {({
        values,
        handleSubmit,
        handleChange,
        errors,
        touched,
        handleBlur,
      }) => (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
          <SafeAreaView className='flex pb-3'>
            <View className='flex-row justify-start mt-2'>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
              >
                <ArrowLeftIcon size='20' color='black' />
              </TouchableOpacity>
            </View>
            <View className='flex-row justify-center'>
              <Image
                resizeMode='contain'
                source={require('../assets/user.png')}
                style={{ width: 165, height: 110 }}
              />
            </View>
          </SafeAreaView>
          <View
            className='flex-1 bg-white px-8 pt-8'
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
          >
            <View className='form space-y-2'>
              <View className='mb-3'>
                <Text className='text-gray-700 ml-4'>Nombre completo</Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  placeholder='Ingrese su nombre'
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
                {errors.name && touched.name ? (
                  <Text className='text-red-500 text-xs italic'>
                    {errors.name}
                  </Text>
                ) : null}
              </View>
              <View className='mb-3'>
                <Text className='text-gray-700 ml-4'>Correo electrónico</Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  placeholder='Ingrese su correo electrónico'
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {errors.email && touched.email ? (
                  <Text className='text-red-500 text-xs italic'>
                    {errors.email}
                  </Text>
                ) : null}
              </View>
              <View className='mb-7'>
                <Text className='text-gray-700 ml-4'>Teléfono</Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  placeholder='Ingrese su teléfono'
                  value={values.phone}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                />
                {errors.phone && touched.phone ? (
                  <Text className='text-red-500 text-xs italic'>
                    {errors.phone}
                  </Text>
                ) : null}
              </View>
            </View>
            <GeneralButton title={'Guardar cambios'} onPress={handleSubmit} />
          </View>
        </View>
      )}
    </Formik>
  )
}

export default EditProfileScreen
