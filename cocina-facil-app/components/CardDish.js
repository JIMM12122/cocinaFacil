import { View, Text, Image } from 'react-native'

export const CardImage = ({ source, style, ...props }) => {
  return (
    <View>
      <Image
        {...props}
        source={source}
        className='w-full h-40 rounded-t-xl'
        resizeMode='cover'
      />
    </View>
  )
}

export const CardContent = ({ children, style, ...props }) => {
  return (
    <View {...props} className='px-6 py-2'>
      {children}
    </View>
  )
}

export const CardBottom = ({ children, style, ...props }) => {
    return (
      <View {...props} className='flex flex-row px-3 pb-3 justify-between'>
        {children}
      </View>
    )
  }

export const CardInfo = ({ children, style, ...props }) => {
  return (
    <Text
      {...props}
      className=''
      style={{
        backgroundColor: '#FE724C',
        padding: 5,
        borderRadius: 15,
        width: 100,
        textAlign: 'center'
      }}
    >
      {children}
    </Text>
  )
}

export const CardTitle = ({ children, style, ...props }) => {
  return (
    <Text {...props} className='text-gray-900 text-lg font-bold'>
      {children}
    </Text>
  )
}

export const CardSubtitle = ({ children, style, ...props }) => {
  return (
    <Text {...props} className='text-gray-500 text-sm font-bold'>
      {children}
    </Text>
  )
}

/**
 * React Native card component built with Tailwind CSS
 */
export const Card = ({ children, style, ...props }) => {
  return (
    <View {...props} className='bg-gray-50 rounded-xl w-80'>
      {children}
    </View>
  )
}
