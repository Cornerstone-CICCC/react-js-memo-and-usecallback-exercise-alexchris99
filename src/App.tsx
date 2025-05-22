import { useState } from 'react'
import Profile from './Components/Profile'
import './App.css'
import ProductList from './Components/ProductList'

function App() {
  // state
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Count : {count}</h2>
      <button type='button' onClick={()=>setCount(prev => prev + 1)}>Increment</button>
      <Profile firstname={"Jonh"} lastname={"Smith"}/>
      <ProductList/>
    </>
  )
}

export default App
