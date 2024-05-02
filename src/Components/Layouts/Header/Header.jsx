import React from 'react'
import './Header.css'
import { Image } from '../../UI/Image/Image'
import { Line } from '../../UI/Line/Line'

export const Header = () => {
  return (
      <header>
        <Image style='image' src='https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
        <h1>Santiago Hurtado Marulanda</h1>
        <Line style='line'/>
      </header>
  )
}

