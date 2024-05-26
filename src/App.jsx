import { useState } from 'react'
import './App.css'
import SideBar from './components/SideBar'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SideBar/>
      <Main/>
    </>
  )
}

export default App
