import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { themeColors } from '../theme';

const client = sanityClient({
  projectId: 'tgz0bo9w',
  dataset: 'production',
  useCdn: true,
});
 
const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default function DishListScreen({ route }) {
  const { categoryId, categoryName } = route.params;
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      const dishesQuery = `*[_type == "dish" && category._ref == "${categoryId}"]`;
      const data = await client.fetch(dishesQuery);
      setDishes(data);
    };

    fetchDishes();
  }, [categoryId]);

  const renderDishItem = ({ item }) => (
    <TouchableOpacity>
      <View style={{ margin: 10 }}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 10 }}
          source={{
            uri: urlFor(item.image).url(),
          }}
        />
        <Text style={{ marginTop: 5, ...themeColors }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', margin: 10 }}>
        Platillos de {categoryName}
      </Text>
      <FlatList
        data={dishes}
        keyExtractor={(item) => item._id}
        renderItem={renderDishItem}
      />
    </View>
  );
}
