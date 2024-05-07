import React from 'react'
import './Header.css'
import { Image } from '../../UI/Image/Image'
import { Line } from '../../UI/Line/Line'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaWhatsapp, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

import imgProfile from '../../../assets/Images/profile.png';
import logoSena from '../../../assets/Images/logo-sena.png';

export const Header = () => {
  return (
    <header>
      <Image style='image-profile' src={imgProfile} alt='img Profile' />

      <div className='title'>
        <h1>Santiago Hurtado</h1>
        <Line style='line' />
      </div>


      <ul className='ul-menu'>
        <ItemNavbar style='a-menu' href='#' content='Perfil' />
        <ItemNavbar style='a-menu' href='#' content='Proyectos' />
        <ItemNavbar style='a-menu' href='#' content='Referencias' />
        <ItemNavbar style='a-menu' href='#' content='Experiencias' />
      </ul>

      <Image style='image-sena-header' src={logoSena} />

      <ul className='ul-socialNetwork'>
        <ItemNavbar style='socialNetwork' href='#' content={<FaWhatsapp />} />
        <ItemNavbar style='socialNetwork' href='#' content={<FaLinkedin />} />
        <ItemNavbar style='socialNetwork' href='#' content={<FaGithub />} />
        <ItemNavbar style='socialNetwork' href='#' content={<FaInstagram />} />
      </ul>

    </header>
  )
}

