import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder({
  projectId: 'tgz0bo9w',
  dataset: 'production',
  useCdn: true,
});

const urlFor = (source) => builder.image(source);

const DishListScreen = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    // Fetch all dishes
    const fetchDishes = async () => {
      try {
        const response = await fetch('https://tgz0bo9w.api.sanity.io/v1/data/query/production', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: '*[_type == "dish"]',
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setDishes(data.result);
        } else {
          console.error('Error fetching dishes:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching dishes:', error);
      }
    };

    fetchDishes();
  }, []);

  return (
    <View>
      <Text>All Dishes</Text>
      <ScrollView>
        {dishes.map((dish) => (
          <View key={dish._id} style={{ marginBottom: 20 }}>
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
};

export default DishListScreen;
