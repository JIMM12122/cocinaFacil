import React, { createContext, useReducer, useContext } from 'react'

const AuthContext = createContext()

const initialState = {
  user: null,
  isLoading: true,
}

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      }
    case 'REMOVE_USER':
      return {
        ...state,
        user: null,
        isLoading: false,
      }
    default:
      return state
  }
}

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user })
  }

  const removeUser = () => {
    dispatch({ type: 'REMOVE_USER' })
  }

  return (
    <AuthContext.Provider value={{ user: state.user, setUser, removeUser }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext)
}

export { AuthProvider, useAuth }
