import * as React from 'react'
import { View, Text, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Welcome = () => {
  return (
    <View className={`flex-1 items-center justify-center bg-white`}>
      <Image
        className={`w-full h-64`}
        contentFit='cover'
        source={""}
      />
      <LinearGradient
        className={`absolute inset-0`}
        locations={[0, 1]}
        colors={['rgba(73, 77, 99, 0)', '#191b2f']}
      />
      <View className={`flex-row items-center justify-center`}>
        <View className={`bg-gray-200 w-10 h-10`} />
        <Text className={`text-lg font-bold text-gray-700`}>x</Text>
      </View>
      <View className={`flex-row items-center justify-center`}>
        <Text
          className={`text-sm text-gray-500`}
        >{`Ya tienes una cuenta? `}</Text>
        <Text className={`text-lg font-bold text-blue-500`}>Sign In</Text>
      </View>
      <View className={`flex-row items-center justify-center`}>
        <View className={`bg-gray-200 w-10 h-10`} />
        <Text className={`text-lg font-bold text-gray-700`}>
          Iniciar con email o telefono
        </Text>
      </View>
    </View>
  )
}

export default Welcome
