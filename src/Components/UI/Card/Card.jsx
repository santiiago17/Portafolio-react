import React from 'react'
import './Card.css'
import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';

export const Card = ({ style, styleImg, src, contentBox, stylePtitle, styleP, styleBtn, href }) => {
    return (
        <div className={style}>
            <Image style={styleImg} src={src} />

            <div className={contentBox}>
                <Paragraph content='Titulo' style={stylePtitle} />
                <Paragraph content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae nulla iusto,
                    minus nesciunt.' style={styleP} />
                <button className={styleBtn}> <a href={href}> Ir al proyecto </a> </button>
            </div>
        </div>
    )
}
