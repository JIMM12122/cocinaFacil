import Navigation from './Navigation'
import { AuthProvider } from './context/AuthContext'
import FlashMessage from 'react-native-flash-message'
// import './styles.css'
import 'react-native-gesture-handler';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <FlashMessage position={'bottom'} floating duration={1500} animated={true} />
    </AuthProvider>
  )
}
