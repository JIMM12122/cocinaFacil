import React from 'react'
import { View, Text, TouchableOpacity, Image } from "react-native"

export default function MyOrders() {


    const handlePress = () => {

    };


    return (
        <View className="flex w-full flex-1 mt-6 space-y-4">
            <View className="w-full flex  justify-center items-center space-y-10">
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
                        <Text className="text-red-500 italic text-lg text-center whitespace-nowrap">Historial</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="shadow-2xl mt-2 m-2">
                <View className="flex justify-between items-center flex-row ">
                    <View className="flex justify-center items-center flex-row">
                        <Image
                            source={require('../assets/images/pizza.png')}
                            className='h-20 top-0 w-20 rounded-2xl'
                        />
                        <View className="flex justify-center items-center space-y-2 p-2 flex-col">
                            <Text className="text-gray-300"> 3 artículos </Text>
                            <Text className="text-black text-lg italic font-semibold">Geek Salad</Text>
                        </View>
                    </View>
                    <View className="flex justify-center items-start ">
                        <Text className="text-[#ff5252] text-lg font-semibold"> #264100</Text>
                    </View>
                </View>
            </View>
            <View className="flex shadow-2xl justify-center items-center">
                <View className="flex w-full justify-between flex-row items-center space-x-4 p-2">
                    <View>
                        <Text className="text-sm text-gray-400"> Llegada estimada</Text>
                        <Text className="text-2xl text-black italic font-semibold">25 min</Text>
                    </View>
                    <View>
                        <Text className="text-sm text-gray-400">Ahora</Text>
                        <Text className="text-lg text-black italic whitespace-nowrap font-semibold">Comida en camino</Text>
                    </View>
                </View>
                <View className="bg-gray-50 shadow-2xl rounded-3xl flex justify-between items-center flex-row w-full">
                    <TouchableOpacity className="rounded-3xl h-auto  w-1/2  p-4" onPress={handlePress}>
                        <Text className="text-red-500 italic text-lg text-center whitespace-nowrap">Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="rounded-3xl h-auto bg-green-400 w-1/2 m-1 p-4" onPress={handlePress}>
                        <Text className="text-white text-center whitespace-nowrap">Seguimiento de orden</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View >
                <Text className="text-black italic p-2 text-xl">Ultimas ordenes</Text>
            </View>
        </View>
    )
}
