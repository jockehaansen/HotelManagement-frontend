import { useState } from 'react'
import './App.css'
import Rooms from './components/pages/Rooms'
import Customers from './components/pages/Customers'
import Navbar from './components/navigation/Navbar'
import HomeScreenNavigationButton from './components/Navigation/HomeScreenNavigationButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    //<><Rooms /></>
    //<><Customers /> </>

    <>
      <Navbar />
      <HomeScreenNavigationButton />
      <HomeScreenNavigationButton />
      <HomeScreenNavigationButton />
      <HomeScreenNavigationButton />
    </>
  )
}

export default App
