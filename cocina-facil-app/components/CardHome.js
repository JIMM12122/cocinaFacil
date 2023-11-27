import {
  Card,
  CardContent,
  CardImage,
  CardTitle,
  CardInfo,
  CardBottom,
} from './CardDish'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CardHome = ({ imgUrl, title, rating, price }) => {
  return (
    <TouchableOpacity onPress={() => console.log('Click!!!!!!!')}>
      <Card>
        <CardImage source={imgUrl} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
        </CardContent>
        <CardBottom>
          <CardInfo>{price}</CardInfo>
          <CardInfo>{rating}</CardInfo>
        </CardBottom>
      </Card>
    </TouchableOpacity>
  )
}
