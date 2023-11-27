import { View, Text, Image, TouchableOpacity } from 'react-native'

const OrderCurrent = ({ title, subtitle, code, image, arrivalTime, status }) => {
  return (
    <View className='flex flex-col p-5' style={{ rowGap: 10 }}>
      <View className='flex flex-row justify-between items-center'>
        <View className='flex flex-row items-center' style={{ columnGap: 10 }}>
          <Image
            resizeMode='contain'
            source={image}
            className='h-20 w-20 rounded-2xl'
          />
          <View className='flex flex-col'>
            <Text className='text-gray-400'>{subtitle}</Text>
            <Text className='text-black text-lg font-semibold'>{title}</Text>
          </View>
        </View>
        <Text className='text-lg font-semibold'>#{code}</Text>
      </View>
      <View className="flex flex-row justify-between">
        <View className="flex flex-col">
          <Text>Llegada estimada</Text>
          <Text className="text-base font-medium">{arrivalTime}</Text>
        </View>
        <View className="flex flex-col">
          <Text>Ahora</Text>
          <Text className="text-base font-medium">{status}</Text>
        </View>
      </View>
      <View>
        <View className='bg-gray-50 shadow-2xl rounded-3xl flex justify-between items-center flex-row w-full'>
          <TouchableOpacity className='rounded-3xl h-auto  w-1/2  p-4'>
            <Text className='text-black font-semibold italic text-lg text-center whitespace-nowrap'>
              Cancelar
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className='rounded-3xl h-auto bg-green-400 w-1/2 m-1 p-4'>
            <Text className='text-black text-center whitespace-nowrap'>
              Seguimiento de orden
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default OrderCurrent
