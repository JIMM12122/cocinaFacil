import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

const AddNewAddress = () => {
  const navigation = useNavigation()

  const [address, setAddress] = useState({
    name: '',
    street: '',
    city: '',
    district: '',
  })

  const handleAddAddress = () => {
    console.log('Nueva dirección:', address)
    setAddress({
      name: '',
      street: '',
      city: '',
      district: '',
    })
  }

  return (
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
        style={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 10,
          borderTopRightRadius: 12,
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
          <View className='mb-1'>
          <Text
              style={{
                width: 60,
                color: '#788080',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'ABeeZee',
              }}
            >
            Dirección exacta
          </Text>
            <TextInput
              className='p-4 bg-gray-100 text-gray-700 rounded-2xl'
              placeholder='Dirección exacta'
              value={address.name}
              onChangeText={(text) => setAddress({ ...address, name: text })}
            />
          </View>

          <View className='mb-3'>
            <Text
              style={{
                width: 60,
                color: '#788080',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'ABeeZee',
              }}
            >
              Canton
            </Text>
            <TextInput
              style={{
                padding: 16,
                backgroundColor: '#F3F4F6',
                color: '#4B5563',
                borderRadius: 20,
              }}
              value={address.street}
              placeholder='Canton'
              onChangeText={(text) => setAddress({ ...address, street: text })}
            />
          </View>

          <View style={{ marginBottom: 3 }}>
          <Text
              style={{
                width: 60,
                color: '#788080',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'ABeeZee',
              }}
            >Distrito
            </Text>
            <TextInput
              style={{
                padding: 16,
                backgroundColor: '#F3F4F6',
                color: '#4B5563',
                borderRadius: 20,
              }}
              placeholder='Distrito'
              value={address.city}
              onChangeText={(text) => setAddress({ ...address, city: text })}
            />
          </View>

          <View style={{ marginBottom: 3 }}>
          <Text
              style={{
                width: 60,
                color: '#788080',
                fontSize: 16,
                fontWeight: 'normal',
                fontFamily: 'ABeeZee',
              }}
            >Provincia</Text>
            <TextInput
              style={{
                padding: 16,
                backgroundColor: '#F3F4F6',
                color: '#4B5563',
                borderRadius: 20,
              }}
              placeholder='Provincia'
              value={address.district}
              onChangeText={(text) =>
                setAddress({ ...address, district: text })
              }
            />
          </View>
        </View>

        <View
          style={{
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            flex: 1,
            backgroundColor: 'white',
            paddingHorizontal: 8,
            paddingTop: 8,
          }}
        >
          <View>
            <Button title='Agregar Dirección' onPress={handleAddAddress} />
          </View>
        </View>
      </View>
    </View>
  )
}

export default AddNewAddress
