import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/user'

const Login = () => {

  const dispatch = useDispatch()

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({name: 'Patent', age: '30', email: 'protect@patient.co'}))
        }}
      >
      login
      </button>
      <button
        onClick={() => {
          dispatch(logout())
        }}
      >
      logout
      </button>
    </div>
  )
}

export default Login
