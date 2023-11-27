import React from 'react'
import { View, Text, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { themeColors } from '../theme'
import client from '../sanity'
import { useAuth } from '../context/AuthContext'
import { useNavigation } from '@react-navigation/native'
import { Formik } from 'formik'
import * as yup from 'yup' // Importa yup para la validación
import GeneralButton from '../components/GeneralButton'

const validationSchema = yup.object().shape({
  direction: yup.string().required('La dirección exacta es requerida'),
  canton: yup.string().required('El cantón es requerido'),
  district: yup.string().required('El distrito es requerido'),
  province: yup.string().required('La provincia es requerida'),
})

const AddNewAddress = () => {
  const navigation = useNavigation()
  const { user, setUser } = useAuth()

  const handleAddAddress = async (values) => {
    console.log('Nueva dirección:', values)
    try {
      await client.create({
        _type: 'addDirecctions',
        ...values,
      })
      alert('Dirección agregada exitosamente a Sanity.')
      console.log('Dirección agregada exitosamente a Sanity.')
    } catch (error) {
      console.error('Error al agregar dirección a Sanity:', error)
    }
  }

  return (
    <Formik
      initialValues={user.address}
      validationSchema={validationSchema}
      onSubmit={handleAddAddress}
    >
      {({
        values,
        handleChange,
        errors,
        touched,
        handleBlur,
        handleSubmit,
      }) => (
        <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
          <SafeAreaView style={{ flex: 0, paddingBottom: 3 }}>
            <View className='flex-row justify-start mt-2'>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                className='bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
              >
                <ArrowLeftIcon size={20} color='black' />
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          <View
          className='mt-4'
            style={{
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              flex: 1,
              backgroundColor: 'white',
              paddingHorizontal: 8,
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <View className='mb-3 mt-2'>
                <Text
                  style={{
                    color: '#788080',
                    fontSize: 16,
                    fontWeight: 'normal',
                  }}
                >
                  Dirección exacta
                </Text>
                <TextInput
                  className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
                  placeholder='Dirección exacta'
                  value={values.direction}
                  onChangeText={handleChange('direction')}
                  onBlur={handleBlur('direction')}
                />
                {touched.direction && errors.direction && (
                  <Text style={{ color: 'red' }}>{errors.direction}</Text>
                )}
              </View>

              <View className='mb-3'>
                <Text
                  style={{
                    width: 60,
                    color: '#788080',
                    fontSize: 16,
                    fontWeight: 'normal',
                  }}
                >
                  Cantón
                </Text>
                <TextInput
                  style={{
                    padding: 16,
                    backgroundColor: '#F3F4F6',
                    color: '#4B5563',
                    borderRadius: 20,
                  }}
                  value={values.canton}
                  placeholder='Canton'
                  onChangeText={handleChange('canton')}
                  onBlur={handleBlur('canton')}
                />
                {touched.canton && errors.canton && (
                  <Text style={{ color: 'red' }}>{errors.canton}</Text>
                )}
              </View>

              <View className={'mb-3'}>
                <Text
                  style={{
                    color: '#788080',
                    fontSize: 16,
                    fontWeight: 'normal',
                  }}
                >
                  Distrito
                </Text>
                <TextInput
                  style={{
                    padding: 16,
                    backgroundColor: '#F3F4F6',
                    color: '#4B5563',
                    borderRadius: 20,
                  }}
                  placeholder='Distrito'
                  value={values.district}
                  onChangeText={handleChange('district')}
                  onBlur={handleBlur('district')}
                />
                {touched.district && errors.district && (
                  <Text style={{ color: 'red' }}>{errors.district}</Text>
                )}
              </View>

              <View className="mb-3">
                <Text
                  style={{
                    color: '#788080',
                    fontSize: 16,
                    fontWeight: 'normal',
                  }}
                >
                  Provincia
                </Text>
                <TextInput
                  style={{
                    padding: 16,
                    backgroundColor: '#F3F4F6',
                    color: '#4B5563',
                    borderRadius: 20,
                  }}
                  placeholder='Provincia'
                  value={values.province}
                  onChangeText={handleChange('province')}
                  onBlur={handleBlur('province')}
                />
                {touched.province && errors.province && (
                  <Text style={{ color: 'red' }}>{errors.province}</Text>
                )}
              </View>
            </View>

            <View
            className='mt-5'
              style={{
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                flex: 1,
                backgroundColor: 'white',
                paddingHorizontal: 8,
                paddingTop: 8,
              }}
            >
              <GeneralButton title={'Guardar cambios'} onPress={handleSubmit} />
            </View>
          </View>
        </View>
      )}
    </Formik>
  )
}

export default AddNewAddress
