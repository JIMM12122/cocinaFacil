import AppNavigation from './appNavigation'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <AppNavigation />
    </AuthProvider>
  )
}
