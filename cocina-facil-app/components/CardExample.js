import { View } from 'react-native-web'
import {
  Card,
  CardContent,
  CardImage,
  CardSubtitle,
  CardTitle,
  CardInfo,
  CardBottom,
} from './CardDish'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CardExample = ({
  imgUrl,
  title,
  subtitle,
  rating,
  price,
}) => {
  return (
    <TouchableOpacity onPress={() => console.log('Click!!!!!!!')}>
      <Card>
        <CardImage source={imgUrl} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
        </CardContent>
        <CardBottom>
          <CardInfo>{price}</CardInfo>
          <CardInfo>{rating}</CardInfo>
        </CardBottom>
      </Card>
    </TouchableOpacity>
  )
}
