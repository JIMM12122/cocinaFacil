import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'tgz0bo9w',
  dataset: 'production',
  useCdn: true,
});

const builder = imageUrlBuilder(client);
const urlFor = (source) => builder.image(source);

export default function DishDetail({ route }) {
  const { dishId } = route.params;
  const [dish, setDish] = useState(null);

  useEffect(() => {
    // Fetch the details of the selected dish based on dishId
    const dishQuery = `*[_type == "dish" && _id == "${dishId}"][0]`;
    client.fetch(dishQuery).then((data) => {
      setDish(data);
    });
  }, [dishId]);

  if (!dish) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={{ padding: 20 }}>
      <Image
        style={{ width: '100%', height: 200, borderRadius: 10 }}
        source={{
          uri: urlFor(dish.image).url(),
        }}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{dish.name}</Text>
        <Text style={{ marginTop: 10, fontSize: 16, color: '#888' }}>
          {dish.description}
        </Text>
        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
            fontWeight: 'bold',
            color: '#555',
          }}
        >
          ${dish.price}
        </Text>
      </View>
    </View>
  );
}
