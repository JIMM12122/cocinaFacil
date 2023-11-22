import React, { useState, useEffect } from 'react'
import { View, Text, Image } from 'react-native'
import imageUrlBuilder from '@sanity/image-url'
import { getDishById } from '../api'

const builder = imageUrlBuilder()

const DishDetail = ({ route }) => {
  const { dishId } = route.params
  const [dishDetails, setDishDetails] = useState(null)

  useEffect(() => {
    getDishById(dishId).then((data) => {
      setDishDetails(data)
    })
  }, [dishId])

  if (!dishDetails) {
    return <Text>Cargando detalles del platillo...</Text>
  }

  const { name, description, image, price } = dishDetails

  return (
    <View>
      <Image
        style={{ width: '100%', height: 200, borderRadius: 10 }}
        source={{
          uri: builder.image(image).url(),
        }}
      />
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ marginTop: 5, fontSize: 14, color: '#888' }}>
          {description}
        </Text>
        <Text
          style={{
            marginTop: 5,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#555',
          }}
        >
          ${price}
        </Text>
        {}
      </View>
    </View>
  )
}

export default DishDetail
