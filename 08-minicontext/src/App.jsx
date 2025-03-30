import { useState } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import Usercontextprovider from './context/Usercontextprovider'

import './App.css'

function App() {

  const [user, setUser] = useState(null);
  return (
    <Usercontextprovider value={{ user, setUser }} >
      <h1>react context</h1>
      <Login/>
      <Profile/>

    </Usercontextprovider>
  )
}

export default App
