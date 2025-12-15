// import { BrowserRouter } from "react-router-dom"
import {  About, Contact, Experience, Feedbacks, Hero, Navbar, StarsCanvas, Tech, Works }from './components'
import herobg from '@/assets/herobg.png'

function App() {

  return (
    <div className="relative z-0 min-h-screen bg-background bg-cover bg-no-repeat bg-fixed bg-center" style={{ backgroundImage: `url(${herobg})` }}>
        <Navbar/>
        <Hero/>
      <About/>
      <Experience/>
      <Tech/>
      <Works/>
      {/* <Feedbacks/> */}
      <div className="relative z-0">
          <Contact/>
          {/* <StarsCanvas/> */}
      </div>
    </div>
    
  )
}

export default App
