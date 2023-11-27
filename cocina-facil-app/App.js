import 'react-native-gesture-handler'
import FlashMessage from 'react-native-flash-message'
import { AuthProvider } from './context/AuthContext'
import Navigation from './AppNavigation'

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <FlashMessage
        position={'bottom'}
        floating
        duration={1500}
        animated={true}
      />
    </AuthProvider>
  )
}
