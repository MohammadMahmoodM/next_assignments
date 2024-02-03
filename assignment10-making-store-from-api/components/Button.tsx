'use client'
import React, {useState} from 'react'
import ShowMoreDetails from './ShowMoreDetails'

const Button = (props:any) => {

    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        return setIsOpen(false)
      }
    
      function openModal() {
        return setIsOpen(true)
      }

  return (
    <div>
        <button type='button' onClick={openModal} className="bg-primary rounded-full">
            SHow More Details
        </button>

        <ShowMoreDetails closeModal={closeModal} isOpen={isOpen} singleProduct={props.singleProduct}/>
    </div>
  )
}

export default Button