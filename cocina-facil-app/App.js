import FlashMessage from 'react-native-flash-message'
import { AuthProvider } from './context/AuthContext'
import Navigation from './AppNavigation'
import 'react-native-gesture-handler'

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <FlashMessage position={'bottom'} floating duration={1500} animated={true} />
    </AuthProvider>
  )
}
