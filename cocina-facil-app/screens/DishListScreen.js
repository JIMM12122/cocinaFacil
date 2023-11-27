import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { CardExample } from '../components/CardExample'
import pizzaImg from '../assets/pizza.png'
import { useNavigation } from '@react-navigation/native'
import { ArrowLeftIcon } from 'react-native-heroicons/solid'
import { SafeAreaView } from 'react-native'
import imageUrlBuilder from '@sanity/image-url'
import client from '../sanity'
import { useEffect, useState } from 'react'
import { getDishesByCategory } from '../api'

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

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

export default function DishListScreen({ route }) {
  const navigation = useNavigation()
  const { categoryId, categoryName } = route.params
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDishesByCategory(categoryId)
        console.log('Dishes:', response)
        setDishes(response)
      } catch (error) {
        console.error('Error fetching dishes:', error)
      }
    }
    fetchData()
  }, [categoryId])

  return (
    <View className='flex-1 justify-center items-center'>
      <SafeAreaView className='flex w-full flex-row items-center justify-between p-3'>
        <View className='flex-row justify-start mt-2'>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className='bg-green-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4'
          >
            <ArrowLeftIcon size='20' color='black' />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center'>
          <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
            Platillos de {categoryName}
          </Text>
        </View>
      </SafeAreaView>
      <FlatList
        contentContainerStyle={{ alignItems: 'center', paddingVertical: 20 }}
        style={{ width: '100%' }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardExample
            imgUrl={item.imgUrl}
            title={item.title}
            subtitle={item.subtitle}
            rating={item.rating}
            price={item.price}
          />
        )}
      />
    </View>
  )
}
