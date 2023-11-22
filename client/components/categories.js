import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import sanityClient from '@sanity/client' // Asegúrate de tener instalada la biblioteca @sanity/client
import imageUrlBuilder from '@sanity/image-url'
import { themeColors } from '../theme'

// Configuración del cliente de Sanity
const client = sanityClient({
  projectId: 'tgz0bo9w', // Reemplaza con tu ID de proyecto de Sanity
  dataset: 'production', // Reemplaza con el nombre de tu conjunto de datos en Sanity
  useCdn: true, // Usar CDN para mejorar la velocidad de carga de imágenes (puedes ajustar según tus necesidades)
})

const builder = imageUrlBuilder(client)
const urlFor = (source) => builder.image(source)

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [categories, setCategories] = useState([])
  const [dishes, setDishes] = useState([])

  useEffect(() => {
    // Consulta para obtener las categorías desde Sanity
    const categoriesQuery = '*[_type == "category"]'
    client.fetch(categoriesQuery).then((data) => {
      setCategories(data)
    })
  }, [])

  useEffect(() => {
    if (activeCategory) {
      const dishesQuery = `*[_type == "dish" && references("${activeCategory._id}")]`
      client.fetch(dishesQuery).then((data) => {
        setDishes(data)
      })
    } else {
      setDishes([])
    }
  }, [activeCategory])
  const navigateToDishDetail = (dishId) => {
    navigation.navigate('dishDetail', { dishId })
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
        {categories.map((category) => {
          let isActive = category._id == activeCategory?._id
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200'
          let textClass = isActive
            ? 'font-semibold text-gray-800'
            : 'text-gray-500'
          return (
            <View key={category._id} style={{ marginRight: 10 }}>
              <TouchableOpacity
                onPress={() => setActiveCategory(category)}
                style={{
                  padding: 10,
                  borderRadius: 10,
                  shadowColor: 'black',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  backgroundColor: btnClass,
                }}
              >
                <Image
                  style={{ width: 45, height: 45 }}
                  className={'rounded-full'}
                  source={{
                    uri: urlFor(category.image).url(),
                  }}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginTop: 5,
                  fontSize: 14,
                  ...themeColors,
                  ...textClass,
                }}
              >
                {category.name}
              </Text>
            </View>
          )
        })}
      </ScrollView>

      {dishes.map((dish) => (
        <TouchableOpacity
          key={dish._id}
          onPress={() => navigateToDishDetail(dish._id)}
        >
          <View style={{ marginBottom: 20 }}>
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
        </TouchableOpacity>
      ))}
    </View>
  )
}
