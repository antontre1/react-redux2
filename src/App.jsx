import React from 'react'
import ChangeColor from './components/ChangeColor'
import Login from './components/Login'
import Profile from './components/Profile'


const App = () => {
  return (
    <div className="App">
      <h1>My Redux Page</h1>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  )

}

export default App
