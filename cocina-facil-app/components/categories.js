import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'


export default function Categories() {
  const [categories, setCategories] = useState([])
  const navigation = useNavigation()

  useEffect(() => {
  }, [])

  const navigateToDishList = (categoryId, categoryName) => {
    console.log('Category Name:', categoryName)
    navigation.navigate('DishListScreen', { categoryId, categoryName })
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
            <TouchableOpacity
              onPress={() =>
                category.name && navigateToDishList(category._id, category.name)
              }
            >
              <Image
                style={{ width: 45, height: 45, borderRadius: 22.5 }}
                source={{
                  uri: ""
                }}
              />
            </TouchableOpacity>
            {category.name && (
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  textAlign: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {category.name}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
