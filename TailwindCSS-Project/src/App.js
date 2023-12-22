import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Cards from './components/Cards'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

// import { useState } from "react"


function App() {
  // const [plus, setPlus] = useState(0);

  return (
    <>
      {/* <button onClick={() => setPlus(plus + 1)}>+</button>
      <p>{plus}</p>
      {plus ?
      <button onClick={() => setPlus(plus - 1)}>-</button>: null} */}

    <Navbar/>
    <Hero/>
    <Analytics/>
    <Cards/>
    <Newsletter/>
    <Footer/>
    </>
  )
}

export default App
