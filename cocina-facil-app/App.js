import Navigation from './Navigation'
import { AuthProvider } from './context/AuthContext'

// import './styles.css'

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}
