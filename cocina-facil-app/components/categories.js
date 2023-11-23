import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation(); // Initialize the useNavigation hook

  useEffect(() => {
    const categoriesQuery = '*[_type == "category"]';
    client.fetch(categoriesQuery).then((data) => {
      setCategories(data);
    });
  }, []);

  const navigateToDishDetail = (categoryId) => {
    navigation.navigate('DishDetailScreen', { categoryId });
  }

  const navigateToDishList = (categoryId) => {
    navigation.navigate('DishListScreen', { categoryId });
  }

  return (
    <View style={{ marginTop: 20 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category) => (
          <View key={category._id} style={{ marginRight: 10 }}>
            <TouchableOpacity onPress={() => navigateToDishList(category._id)}>
              <Image
                style={{ width: 45, height: 45, borderRadius: 22.5 }}
                source={{
                  uri: urlFor(category.image).url(),
                }}
              />
            </TouchableOpacity>
            {category.name && (
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                }}
              >
                {category.name}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
