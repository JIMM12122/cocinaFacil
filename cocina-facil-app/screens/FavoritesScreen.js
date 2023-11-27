import { FlatList, View } from 'react-native'
import { CardExample } from '../components/CardExample'
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

export default function FavoritesScreen() {
  return (
    <View className='flex-1 justify-center items-center'>
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
