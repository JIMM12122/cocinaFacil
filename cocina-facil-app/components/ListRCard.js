import React from 'react';
import { View, Text } from 'react-native';
import Card from './RCard';


const List = ({ cards }) => {
    return (
        <View className='flex w-full h-full flex-col justify-center items-center mb-20'>
            <View className='flex items-center justify-center w-full h-full'>
                <View>
                    <Text className='font-light whitespace-nowrap text-lg italic '>Platillos sugeridos</Text>
                </View>
                <View>
                    <Text className='text-red-500 whitespace-nowrap text-xs'>Ver todo {">"}</Text>
                </View>
            </View>
            <View className='flex flex-nowrap overflow-x-auto overflow-scroll w-80 space-x-4 h-full '>
                {cards.map((card) => (
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
                        id={card.id}
                    />
                ))}
            </View>
        </View>
    );
};


export default List;