import { Button, Text, View } from 'react-native'
import { saveCustomer } from '../api'

export default function SettingsScreen() {
  const onSaveCustomer = async () => {
    const customer = {
      name: 'John Doe',
      email: 'john@gmail.com',
      address: 'Perez Zeledon',
      phone: '88888888',
    }

    try {
      const response = await saveCustomer(customer)
      console.log('Customer saved: ', response)
    } catch (error) {
      console.log('Error saving customer: ', error)
    }
  }

  return (
    <View>
      <Text>SettingsScreen</Text>
      <Button
        title='Learn More'
        color='#841584'
        onPress={() => onSaveCustomer()}
      />
    </View>
  )
}
