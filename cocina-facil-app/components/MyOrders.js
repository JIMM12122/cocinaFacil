import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native"

export default function MyOrders() {


    const handlePress = () => {

    };


    return (
        <View className="flex w-3/4 flex-1 mt-6">
            <View className="w-full flex  justify-center items-center space-y-4">
                <View className="flex justify-between items-center space-x-2  flex-row">
                    <TouchableOpacity className="rounded-md shadow-2xl bg-white p-2" onPress={handlePress}>
                        <Text className="text-black font-extrabold  text-center whitespace-nowrap">{"<"}</Text>
                    </TouchableOpacity>
                    <Text className="text-2xl font-semibold animate-shake animate-duration-500">
                        Mis ordenes
                    </Text>
                </View>
                <View className="bg-gray-50 rounded-3xl flex justify-between items-center flex-row w-full">
                    <TouchableOpacity className="rounded-3xl h-auto bg-green-400 w-1/2 m-1 p-4" onPress={handlePress}>
                        <Text className="text-white text-center whitespace-nowrap">Pedidos por llegar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-3xl h-auto  w-1/2  p-4" onPress={handlePress}>
                        <Text className="text-red-500 italic text-md text-center whitespace-nowrap">Historial</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="shadow-2xl mt-4">
                <View className="flex justify-between items-center flex-row ">
                    <View className="flex justify-center items-center flex-row">
                        <Image
                            source={require('../assets/images/pizza.png')}
                            className='h-20 top-0 w-20 rounded-2xl'

                        />
                        <View className="flex justify-center items-center flex-col">
                            <Text className="text-gray-300"> 3 artículos </Text>
                            <Text className="text-black text-lg font-semibold"> Geek Salad </Text>
                        </View>
                    </View>
                    <View className="flex justify-center items-start ">
                        <Text className="text-[#ff5252] text-lg font-semibold"> #264100</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
