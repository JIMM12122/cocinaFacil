
import React from 'react'
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native'
import GeneralButton from "../components/GeneralButton"

export default function Vote() {

    const handlePress = () => {

    };


    return (
        <View className="flex flex-1 mt-4">
            <Image
                source={require('../assets/images/pizza.png')}
                className='h-44 top-0 w-80 rounded-xl'

            />
            <View className="flex justify-center items-center mt-8">
                <Text className="font-bold text-2xl">Pizza Napolitana</Text>
                <Text className="font-bold text-lg italic mt-2 text-[#9ADE7B]">Orden enviada</Text>
            </View>
            <View className="flex justify-center items-center mt-10 space-y-2">
                <Text className="font-semibold text-xl italic">Evalúa está orden</Text>
                <Text className="font-semibold text-xl text-red-500">Buena</Text>
            </View>
            <View className="flex justify-center flex-row items-center space-x-5 mt-2">
                <Image
                    source={require('../assets/images/fullStar.png')}
                    className='h-8 w-8 rounded-xl'

                />
                <Image
                    source={require('../assets/images/fullStar.png')}
                    className='h-8 w-8 rounded-xl'

                />
                <Image
                    source={require('../assets/images/fullStar.png')}
                    className='h-8 w-8 rounded-xl'

                />
                <Image
                    source={require('../assets/images/fullStar.png')}
                    className='h-8 w-8 rounded-xl'

                />
                <Image
                    source={require('../assets/images/fullStar.png')}
                    className='h-8 w-8 rounded-xl'

                />
            </View>
            <View className="flex justify-center items-center mt-4">
                <TextInput
                    placeholder="Escribir reseña"
                    className=" shadow-2xl bg-gray-100 flex justify-end top-0 p-2 font-bold text-end w-3/4 h-40"
                />
                <GeneralButton onPress={handlePress} />
            </View>
        </View>
    )
}
