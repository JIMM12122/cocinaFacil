import { Text, View } from 'react-native'
import List from '../components/ListRCard'
import  imagen from "../assets/images/pizza.png"

export default function SettingsScreen() {
  
  const cards = [
    {
      id: 1,
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
    {
      id: 2,
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <List Cards={cards} />
    </View>
  )
}