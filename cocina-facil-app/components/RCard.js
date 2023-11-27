import React from 'react';
import { View, Text, Image } from 'react-native';

const Card = (props) => {
    return (
        <View className="relative mt-4 rounded-lg shadow-xl transition hover:shadow-lg">
            <Image
                source={props.img}
                className="h-44 w-full object-cover rounded-t-2xl"
            />
            <View className='absolute top-0 left-0 m-2 bg-white rounded-xl p-2 font-extralight text-sm'>
                <Text>{props.starts} ★</Text>
            </View>
            <View className='bg-white w-80 h-auto p-2'>
                <Text  className="mt w-full h-full text-sm flex justify-between text-black">{props.name}</Text>
                <View className='flex flex-row justify-start items-center mt-2 space-x-2 '>
                    <View className='flex flex-row justify-start items-center mt-2 space-x-2 '>
                        <Text className='text-[#ff5252] text-xs'>{props.deliveryTipe}</Text>
                    </View>
                    <View className='flex flex-row justify-center items-center mt-2 space-x-2 '>
                        <Text className='text-[#ff5252] text-xs'>{`${props.time} mins`}</Text>
                    </View>
                </View>
                <View className='flex  justify-center items-center mt-2'>
                    <Text className='text-sm break-words w-1/3 text-center font-extralight bg-gray-100 text-gray-500 rounded-xl'>{props.descriptionLabel1}</Text>
                    <Text className='text-sm break-words w-1/3 text-center font-extralight bg-gray-100 text-gray-500 rounded-xl'>{props.descriptionLabel2}</Text>
                    <Text className='text-sm break-words w-1/3 text-center font-extralight bg-gray-100 text-gray-500 rounded-xl'>{props.descriptionLabel3}</Text>
                </View>
            </View>
        </View>
    );
};

export default Card;