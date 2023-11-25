import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { themeColors } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import { saveCustomer } from '../api'
import * as Yup from 'yup'
import { showMessage } from 'react-native-flash-message'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy Corta')
    .max(50, 'Muy Larga')
    .required('Requerido'),
  password: Yup.string()
    .min(6, 'Muy corta')
    .max(30, 'Muy larga')
    .required('Requerido'),
  email: Yup.string().email('Email invalido').required('Requerido'),
})

export default function SignUpScreen() {
  const navigation = useNavigation()

  const handleOnSubmit = async (values, { resetForm }) => {
    try {
      const response = await saveCustomer(values)
      console.log('Customer saved: ', response)
      showMessage({
        message: 'Usuario creado correctamente',
        type: 'success',
      })
      navigation.navigate('Login')
      resetForm()
    } catch (error) {
      console.log('Error saving customer: ', error)
    }
  }

  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      validationSchema={SignupSchema}
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
        <View
          className='flex-1 bg-white'
          style={{ backgroundColor: themeColors.bg }}
        >
          <SafeAreaView className='flex'>
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
                source={require('../assets/images/signup.png')}
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
                <Text className='text-gray-700 ml-4'>Nombre</Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  placeholder='Enter Name'
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
                <Text className='text-gray-700 ml-4'>Email</Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  placeholder='Enter Email'
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
                <Text className='text-gray-700 ml-4'>Contraseña</Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  secureTextEntry
                  placeholder='Enter Password'
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                {errors.password && touched.password ? (
                  <Text className='text-red-500 text-xs italic'>
                    {errors.password}
                  </Text>
                ) : null}
              </View>
              <TouchableOpacity
                className='py-3 bg-yellow-400 rounded-xl'
                onPress={handleSubmit}
              >
                <Text className='font-xl font-bold text-center text-gray-700'>
                  Registrarme
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
                ¿Ya tienes una cuenta?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text className='font-semibold text-yellow-500'> Ingresar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}
