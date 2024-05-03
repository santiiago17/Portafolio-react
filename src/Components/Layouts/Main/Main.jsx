import React from 'react'
import './Main.css'
import { Titles } from '../../UI/Titles/Titles'
import { Line } from '../../UI/Line/Line'
import { Paragraph } from '../../UI/Paragraph/Paragraph'
import { Card } from '../../UI/Card/Card'
import { References } from '../../UI/References/References'
import { Experiences } from '../../UI/Experiences/Experiences'

export const Main = () => {
  return (
    <main>
      <div className='container-div'>
        <Titles style='title-h2' src='src/Images/logo-sena.png' styleImage='title-img' content='Perfil' />
        <Line style='hr-title' />
        <Paragraph style='p-profile' content='Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Omnis maxime at, quidem dolore doloribus ducimus maiores error,provident sapiente, perferendis
        necessitatibus ea iure amet voluptas ipsam hic quos ut aliquam. Lorem ipsum dolor sit, amet 
        consectetur adipisicing elit. Omnis maxime at, quidem dolore doloribus ducimus maiores error,
        provident sapiente, perferendis necessitatibus ea iure amet voluptas ipsam hic quos ut aliquam. 
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis maxime at, quidem dolore doloribus
        ducimus maiores error,provident sapiente, perferendis necessitatibus ea iure amet voluptas ipsam hi
        quos ut aliquam.' />
      </div>

      <div className='container-div'>
        <Titles style='title-h2' src='src/Images/logo-sena.png' styleImage='title-img' content='Proyectos' />
        <Line style='hr-title' />

        <div className='container-card'>
          <Card style='box-card' styleImg='imgCard' src='src/Images/dev.webp' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
          <Card style='box-card' styleImg='imgCard' src='src/Images/dev.webp' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
          <Card style='box-card' styleImg='imgCard' src='src/Images/dev.webp' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
          <Card style='box-card' styleImg='imgCard' src='src/Images/dev.webp' contentBox='contentP' stylePtitle='stylePtitle' styleP='styleP' styleBtn='styleBtn' href='#' />
        </div>
      </div>

      <div className='container-div'>
        <Titles style='title-h2' src='src/Images/logo-sena.png' styleImage='title-img' content='Referencias' />
        <Line style='hr-title' />

        <div className='container-references'>
          <References styleDiv='box-references' style='' />
          <References styleDiv='box-references' style='' />
          <References styleDiv='box-references' style='' />
        </div>
      </div>

      <div className='container-div'>
        <Titles style='title-h2' src='src/Images/logo-sena.png' styleImage='title-img' content='Experiencia' />
        
        <div className='container-experiences'>
          <Experiences src='src/Images/React.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
          <Experiences src='src/Images/node.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
          <Experiences src='src/Images/mongo.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
          <Experiences src='src/Images/java.png' style='stiloImg' styleLine='lineF' classP='classP' content='Bases' boxFooter='boxFooter' />
        </div>
      </div>

    </main>
  )
}

