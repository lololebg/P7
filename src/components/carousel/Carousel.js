import './carousel.scss'
import ArrowRight from '../../assets/right.png'
import ArrowLeft from '../../assets/left.png'

import { useState } from 'react'

export default function Défilement({imageSlider}) {

  const [Index, Set] = useState(0)

  const Click = () => {
      Set(Index + 1)
      if(Index === imageSlider.length - 1)
          Set(0)
  }

  const On = () => {
      Set(Index - 1)
      if(Index === 0)
          Set(imageSlider.length - 1)
  }

return (
  <section style={{backgroundImage : `url(${imageSlider[Index]})`}} className='carousel'>
    {imageSlider.length > 1 && 
     <>
     <img 
     className='carousel_arrow carousel_arrow_right' 
      src={ArrowRight} 
      alt="Defilement" 
      onClick={Click}
  />
   <img 
      className='carousel_arrow carousel_arrow_left' 
      src={ArrowLeft} 
      alt="Defilement" 
      onClick={On}
   />
<p className='slideCount'>{Index + 1} / {imageSlider.length}</p>
</>
} 
</section>
  )
}


