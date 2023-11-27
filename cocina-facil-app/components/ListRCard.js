import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Card from './RCard';


const List = ({ Cards }) => {
    return (
        <View className='flex w-full h-full flex-col justify-center items-center'>
            <View className='flex items-center justify-center space-x-12 w-full h-full'>
                <Text className='font-light whitespace-nowrap text-lg italic '>Platillos sugeridos</Text>
                <Text className='text-red-500 whitespace-nowrap text-xs'>Ver todo {">"}</Text>
            </View>
            <ScrollView className='flex flex-nowrap overflow-x-auto overflow-scroll w-80 space-x-4 h-full '>
                {Cards.map((card) => (
                    <Card
                        key={card.id}
                        deliveryTipe={card.deliveryTipe}
                        img={card.img}
                        name={card.name}
                        send={card.send}
                        descriptionLabel1={card.descriptionLabel1}
                        descriptionLabel2={card.descriptionLabel2}
                        descriptionLabel3={card.descriptionLabel3}
                        starts={card.starts}
                        time={card.time}
                        id={0}
                    />
                ))}
            </ScrollView>
        </View>
    );
};


export default List;