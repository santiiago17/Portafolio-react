import React from 'react'
import './Main.css'
import { Titles } from '../../UI/Titles/Titles'
import { Line } from '../../UI/Line/Line'
import { Paragraph } from '../../UI/Paragraph/Paragraph'

export const Main = () => {
  return (
    <main>
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

    </main>
  )
}

