import {useState} from 'react'
import FortuneGalleta from './components/FortuneGalleta'
import './App.css'
import cookie from './components/data/phrases.json'

function App() {
  const back = ['/fondosImg/fondo1.jpg','/fondosImg/fondo2.jpg','/fondosImg/fondo3.jpg','/fondosImg/fondo4.jpg']
  const [index, useIndex] = useState (0)
  const [bg, usebg]= useState (0)

  const lucky = () => {
    if (bg < back.length -1) {
      usebg(bg + 1)
    }else{
      usebg(0)
    }     
    
  }  
  useIndex(Math.floor(Math.random()* cookie.length))       

  document.body.style= `background-image: url(${back[bg]})`
  return (
    <>
     <FortuneGalleta
     data={cookie[index]}/>
     <div>
      <button onClick= {lucky}>Try again!</button>
     </div>
     
    </>
  )
}

export default App