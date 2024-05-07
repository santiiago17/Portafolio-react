import React from 'react'
import './Main.css'
import { Titles } from '../../UI/Titles/Titles'
import { Line } from '../../UI/Line/Line'
import { Paragraph } from '../../UI/Paragraph/Paragraph'
import { Card } from '../../UI/Card/Card'
import { References } from '../../UI/References/References'
import { Experiences } from '../../UI/Experiences/Experiences'

import logoSena from '../../../assets/Images/logo-sena.png';
import imgProjects  from'../../../assets/Images/dev.webp';
import imgReact  from '../../../assets/Images/React.png';
import imgNode  from '../../../assets/Images/node.png';
import imgMongo  from '../../../assets/Images/mongo.png';
import imgJava  from '../../../assets/Images/java.png';

export const Main = () => {
  return (
    <main>
      <div className='container-div'>
        <Titles style='title-h2' src={logoSena} alt='Logo Sena' styleImage='title-img' content='Perfil' />
        <Line style='hr-title' />
        <Paragraph style='p-profile' content='Soy un desarrollador de software con experiencia en tecnologías como JavaScript, 
            SQL, MySQL, HTML, CSS y manejo control de versiones con GIT. Me especializo en el 
            desarrollo de aplicaciones Frontend y Backend utilizando estas tecnologías para 
            crear interfaces de usuario atractivas y funcionales. Además de mis competencias 
            técnicas, poseo habilidades interpersonales como comunicación efectiva, 
            adaptabilidad, autodidacta, pensamiento crítico y trabajo en equipo. Estoy 
            comprometido en colaborar en proyectos desafiantes donde pueda aplicar todas mis 
            destrezas para desarrollar soluciones de calidad y generar un impacto positivo en el 
            campo del desarrollo de aplicaciones. Me entusiasman las oportunidades que me 
            permitan impulsar el éxito de los proyectos y contribuir al crecimiento de los equipos 
            de desarrollo. ' />
      </div>

      <div className='container-div'>
        <Titles style='title-h2' src={logoSena} alt='Logo Sena' styleImage='title-img' content='Proyectos' />
        <Line style='hr-title' />

        <div className='container-card'>
          <Card style='box-card' styleImg='imgCard' src={imgProjects} alt='img Project' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
          <Card style='box-card' styleImg='imgCard' src={imgProjects} alt='img Project' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
          <Card style='box-card' styleImg='imgCard' src={imgProjects} alt='img Project' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
          <Card style='box-card' styleImg='imgCard' src={imgProjects} alt='img Project' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
        </div>
      </div>

      <div className='container-div'>
        <Titles style='title-h2' src={logoSena} alt='Logo Sena' styleImage='title-img' content='Referencias' />
        <Line style='hr-title' />

        <div className='container-references'>
          <References styleDiv='box-references' style='' />
          <References styleDiv='box-references' style='' />
          <References styleDiv='box-references' style='' />
        </div>
      </div>

      <div className='container-div'>
        <Titles style='title-h2' src={logoSena} alt='Logo Sena' styleImage='title-img' content='Experiencia' />
        
        <div className='container-experiences'>
          <Experiences src={imgReact} alt='img React' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
          <Experiences src={imgNode} alt='img Node JS' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
          <Experiences src={imgMongo} alt='img Mongo' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
          <Experiences src={imgJava} alt='img Java' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
        </div>
      </div>

    </main>
  )
}

