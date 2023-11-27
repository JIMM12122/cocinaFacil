import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Formik } from 'formik'
import { showMessage } from 'react-native-flash-message'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import * as Yup from 'yup'
import { themeColors } from '../theme'
import GeneralButton from '../components/GeneralButton'

const RecoverPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Email invalido').required('Requerido'),
})

const RecoverPasswordScreen = () => {
  const navigation = useNavigation()

  const handleOnSubmit = async (values, { resetForm }) => {
    try {
      console.log('Email correctly sended: ')
      showMessage({
        message: 'Correo enviado correctamente',
        type: 'success',
      })
      resetForm()
    } catch (error) {
      console.log('Error sending email: ', error)
    }
  }

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={RecoverPasswordSchema}
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
          <SafeAreaView className='flex pb-3'>
            <View className='flex-row justify-start mt-2'>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
              >
                <ArrowLeftIcon size='20' color='black' />
              </TouchableOpacity>
            </View>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                Recuperación de Contraseña
              </Text>
            </View>
          </SafeAreaView>
          <View
            style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
            className='flex-1 bg-white px-8 pt-8'
          >
            <View className='form space-y-2'>
              <View className='mb-10'>
                <Text className='text-gray-500 ml-4 mb-10'>
                  Por favor ingrese su dirección de correo electrónico para
                  solicitar un restablecimiento de su contraseña.
                </Text>
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
              <GeneralButton
                title={'Enviar datos de recuperación'}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default RecoverPasswordScreen
