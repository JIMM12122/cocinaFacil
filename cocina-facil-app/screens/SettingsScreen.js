import { Text, View } from 'react-native'
import imagen from "../assets/images/pizza.png"
import Vote from "../components/Vote"
import MyOrders from '../components/MyOrders';
import List from '../components/ListRCard';

export default function SettingsScreen() {

  const cards = [
    {
      id: 1,
      deliveryTipe: 'Envío gratis',
      img: imagen, // Corregido
      name: 'Tacos de molida1',
      send: 'sasa',
      descriptionLabel1: 'Comida mexicana',
      descriptionLabel2: 'Proteína',
      descriptionLabel3: 'Comida rápida',
      starts: '10',
      time: '10:10',
    },
    {
      id: 2,
      deliveryTipe: 'Envío gratis',
      img: imagen, // Corregido
      name: 'Tacos de molida2',
      send: 'sasa',
      descriptionLabel1: 'Comida mexicana',
      descriptionLabel2: 'Proteína',
      descriptionLabel3: 'Comida rápida',
      starts: '10',
      time: '10:10',
    },
    {
      id: 3,
      deliveryTipe: 'Envío gratis',
      img: imagen, // Corregido
      name: 'Tacos de molida',
      send: 'sasa',
      descriptionLabel1: 'Comida mexicana',
      descriptionLabel2: 'Proteína',
      descriptionLabel3: 'Comida rápida',
      starts: '10',
      time: '10:10',
    },
  ];
  return (
    <View className='bg-blue-100 overflow-x-scroll  flex justify-center items-center w-full
    '>
      <View className='w-72 flex-row mt-0 flex justify-center items-center'>
        <List cards={cards} />
      </View>
    </View>
  )
}