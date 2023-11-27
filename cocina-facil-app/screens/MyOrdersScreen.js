import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native'
import Orden from '../components/Orden'
import ImagePizza from '../assets/images/pizza.png'
import OrderCurrent from '../components/OrderCurrent'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'

const MyOrdersScreen = () => {
  const navigation = useNavigation()

  return (
    <View className='flex flex-column'>
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
          <Text className='text-2xl font-semibold animate-shake animate-duration-500'>
            Mis ordenes
          </Text>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingVertical: 15,
        }}
      >
        <View className='bg-gray-50 shadow-2xl rounded-3xl flex justify-between items-center flex-row mx-10'>
          <TouchableOpacity className='rounded-3xl h-auto bg-green-400 w-1/2 m-1 p-4'>
            <Text className='text-black text-center whitespace-nowrap'>
              Pedidos
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='ml-2 rounded-3xl h-auto  w-1/2  p-4'>
            <Text className='text-black font-semibold italic text-lg text-center whitespace-nowrap'>
              Historial
            </Text>
          </TouchableOpacity>
        </View>
        <OrderCurrent
          image={ImagePizza}
          arrivalTime={'25 min'}
          status={'Comida en camino'}
          title={'Geek Salad'}
          subtitle={'3 artículos'}
          code={'264100'}
        />
        <View className='mx-10'>
          <Text className='text-xl font-medium'>Últimas ordenes</Text>
        </View>
        <Orden
          image={ImagePizza}
          price={3000}
          subtitle={'20 Jun, 10:30 3 Items'}
          title={'Pizza carbonara'}
        />
        <Orden
          image={ImagePizza}
          price={3000}
          subtitle={'20 Jun, 10:30 3 Items'}
          title={'Pizza'}
        />
        <Orden
          image={ImagePizza}
          price={3000}
          subtitle={'20 Jun, 10:30 3 Items'}
          title={'Pizza carbonara'}
        />
        <View style={{height: 80}}></View>
      </ScrollView>
    </View>
  )
}

export default MyOrdersScreen
