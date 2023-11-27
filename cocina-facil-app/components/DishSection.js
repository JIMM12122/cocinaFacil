import { View, Text, FlatList } from 'react-native'
import { CardHome } from './CardHome'

const DishSection = ({ title = 'Default Text', items }) => {
  return (
    <View>
      <Text className='mt-7 mx-5 mb-3 text-lg font-medium italic'>{title}</Text>
      <FlatList
        horizontal
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 20 }}
        style={{ width: '100%' }}
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardHome
            imgUrl={item.imgUrl}
            title={item.title}
            rating={item.rating}
            price={item.price}
          />
        )}
      />
    </View>
  )
}

export default DishSection
