import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import imageUrlBuilder from '@sanity/image-url';  // Import imageUrlBuilder

const builder = imageUrlBuilder(/* Your Sanity client instance */);
const urlFor = (source) => builder.image(source);

const DishDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { dish, category } = route.params;

  return (
    <View>
      <Text>{category.name}</Text>
      <ScrollView>
        {dish.map((dish) => (
          <View key={dish._id}>
            <Image
              style={{ width: '100%', height: 200, borderRadius: 10 }}
              source={{
                uri: urlFor(dish.image).url(),
              }}
            />
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                {dish.name}
              </Text>
              <Text style={{ marginTop: 5, fontSize: 14, color: '#888' }}>
                {dish.description}
              </Text>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#555',
                }}
              >
                ${dish.price}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default DishDetailScreen;
