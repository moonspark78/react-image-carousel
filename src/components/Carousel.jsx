import React from 'react'
import "./Carousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill  } from "react-icons/bs";

export const Carousel = ({data}) => {

    console.log(data);


  return (
    <div className='carousel'>
        {
            data.map((item,idx) => {
                return <img 
                          className='slide'
                          src={item.src} 
                          alt={item.alt} 
                          key={idx}
                        />
            })
        }
    </div>
  )
}
 