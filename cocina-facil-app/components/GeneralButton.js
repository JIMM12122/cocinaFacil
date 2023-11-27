import { TouchableOpacity, Text } from 'react-native'

const GeneralButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      className={'py-4 mx-8 bg-green-400 rounded-3xl'}
      onPress={onPress}
    >
      <Text className={'font-xl font-bold text-center text-gray-700'}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default GeneralButton
