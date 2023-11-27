import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import Categories from '../components/categories'
import { getFeaturedResturants } from '../api'
import * as Icon from 'react-native-feather'
import DishSection from '../components/DishSection'
import pizzaImg from '../assets/pizza.png'

const data = [
  {
    id: '1',
    imgUrl: pizzaImg,
    title: 'Chicken Hawaiian',
    subtitle: 'Chicken, Cheese and pineapple',
    rating: '4.5 ★',
    price: '₡ 5600',
  },
  {
    id: '2',
    imgUrl: pizzaImg,
    title: 'Chicken Hawaiian',
    subtitle: 'Chicken, Cheese and pineapple',
    rating: '4.5 ★',
    price: '₡ 5600',
  },
  {
    id: '3',
    imgUrl: pizzaImg,
    title: 'Chicken Hawaiian',
    subtitle: 'Chicken, Cheese and pineapple',
    rating: '4.5 ★',
    price: '₡ 5600',
  },
]

export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([])
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false })
  }, [])
  useEffect(() => {
    getFeaturedResturants().then((data) => {
      setFeaturedCategories(data)
    })
  }, [])

  return (
    <SafeAreaView className='bg-white'>
      <StatusBar barStyle='dark-content' />
      <View className='m-4 flex flex-row justify-between align-center'>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          style={{
            backgroundColor: '#FE724C',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}
        >
          <Icon.Menu height='25' width='25' stroke='black' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={{
            backgroundColor: '#FE724C',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
          }}
        >
          <Icon.User height='25' width='25' stroke='black' />
        </TouchableOpacity>
      </View>
      <ScrollView className='flex'>
        <View className='justify-center items-center p-3'>
          <Text className='italic text-2xl font-medium'>
            ¿Que te gustaría comer hoy?
          </Text>
        </View>
        <View className='flex-row items-center space-x-2 px-4 pb-2 '>
          <View className='flex-row flex-1 items-center p-3 rounded-2xl border border-gray-300'>
            <Icon.Search height='25' width='25' stroke='gray' />
            <TextInput
              placeholder='Busca lo que te gusta a tí'
              className='ml-2 flex-1'
              keyboardType='default'
            />
          </View>
          <TouchableOpacity
            style={{ backgroundColor: '#FE724C' }}
            className='rounded-full p-3'
          >
            <Icon.Sliders
              height={20}
              width={20}
              strokeWidth='2.5'
              stroke='black'
            />
          </TouchableOpacity>
        </View>
        <Categories />
        <DishSection title='Platillos sugeridos' items={data} />
        <DishSection title='Lo más popular' items={data} />
        <DishSection title='Especialidades de la temporada' items={data} />
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  )
}
