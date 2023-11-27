import React, { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GeneralButton from '../components/GeneralButton'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

const Cart = () => {
  const navigation = useNavigation()
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 5000, quantity: 1 },
    { id: 2, name: 'Hamburguesa', price: 5000, quantity: 1 },
  ])

  const [taxes, setTaxes] = useState(13)
  const [promoCode, setPromoCode] = useState('')

  const calculateSubtotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    )
  }

  const calculateTaxes = () => {
    return (calculateSubtotal() * taxes) / 100
  }

  const calculateTotal = () => {
    const subtotal = calculateSubtotal()
    return subtotal + (subtotal * taxes) / 100
  }

  const applyPromoCode = () => {
    alert('Código promocional aplicado con éxito')
  }

  const handleSubmit = () => {
    alert('Pedido realizado con éxito')
  }

  const removeItem = (itemId) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) - 1 }
          : item,
      )

      return updatedItems.filter((item) => item.quantity > 0)
    })
  }

  const AddMoreItem = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item,
      ),
    )
  }

  const renderItem = ({ item }) => (
    <View className='flex flex-row items-center justify-between'>
      <View
        className='flex flex-row items-center justify-between'
        style={{ columnGap: 10 }}
      >
        <Image
          source={require('../assets/images/pizza.png')}
          className='h-24 w-24 rounded-2xl'
          resizeMode='cover'
        />
        <View className='flex flex-col'>
          <Text className='text-lg font-medium'>{item.name}</Text>
          <Text className='text-lg font-medium' style={{ color: '#FE724C' }}>
            ₡ {item.price.toFixed(2)}
          </Text>
        </View>
      </View>
      <View className='h-full flex flex-column items-end'>
        <TouchableOpacity
          className='rounded-full w-8 h-8 items-center justify-center'
          onPress={() => removeItem(item.id)}
        >
          <Entypo name='cross' size={24} color='#FE724C' />
        </TouchableOpacity>
        <View style={{ height: 30 }} />
        <View
          className='flex flex-row items-center justify-between'
          style={{ columnGap: 10 }}
        >
          <TouchableOpacity
            className='rounded-full w-8 h-8 items-center justify-center'
            style={{ borderColor: '#FE724C', borderWidth: 2 }}
            onPress={() => removeItem(item.id)}
          >
            <Feather name='minus' size={24} color='black' />
          </TouchableOpacity>
          <Text>{item.quantity}</Text>
          <TouchableOpacity
            className='rounded-full w-8 h-8 items-center justify-center'
            style={{ backgroundColor: '#FE724C' }}
            onPress={() => AddMoreItem(item.id)}
          >
            <Ionicons name='add-sharp' size={24} color='black' />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

  return (
    <View className='p-3 h-full flex flex-column content-evenly'>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View className='flex flex-row p-3 mt-5 rounded-3xl border border-gray-300'>
        <TextInput
          placeholder='Código promocional'
          className='ml-2 flex-1'
          keyboardType='default'
          value={promoCode}
          onChangeText={(text) => setPromoCode(text)}
        />
        <TouchableOpacity
          className={'py-4 w-40 bg-green-400 rounded-2xl'}
          onPress={applyPromoCode}
        >
          <Text className={'font-xl font-bold text-center text-gray-700'}>
            Aplicar
          </Text>
        </TouchableOpacity>
      </View>
      <View className='mt-5'>
        <View className='flex flex-row justify-between'>
          <Text className='text-lg font-medium'>Subtotal:</Text>
          <Text className='text-lg font-medium'>
            ₡ {calculateSubtotal().toFixed(2)}
          </Text>
        </View>
        <View
          className='border-gray-300'
          style={{
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        />
        <View className='flex flex-row justify-between'>
          <Text className='text-lg font-medium'>Impuestos (13%):</Text>
          <Text className='text-lg font-medium'>
            ₡ {calculateTaxes().toFixed(2)}
          </Text>
        </View>
        <View
          className='border-gray-300'
          style={{
            borderBottomWidth: 1,
            marginVertical: 10,
          }}
        />
        <View className='flex flex-row justify-between'>
          <Text className='text-lg font-medium'>Total:</Text>
          <Text className='text-lg font-medium'>
            ₡ {calculateTotal().toFixed(2)}
          </Text>
        </View>
      </View>
      <View className='mt-5'>
        <GeneralButton title={'Realizar pedido'} onPress={handleSubmit} />
      </View>
    </View>
  )
}

export default Cart
