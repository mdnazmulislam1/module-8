import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='card'>
      <img src="gar.webp" alt="" />
      <h2>This is garden</h2>
      <button>Click now</button>
     </div>

     
     <div className='card-2'>
      <img src="flower.img" alt="" />
      <h3>This is Flower. Flower is very beautiful.</h3>
      <button>Download Now</button>
     </div>

     

    </>
    
  )
}

export default App
