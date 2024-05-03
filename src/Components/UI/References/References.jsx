import React from 'react'
import './References.css'
import { Paragraph } from '../Paragraph/Paragraph' 


export const References = ({ style, styleDiv }) => {
    return (
        <div className={styleDiv}>
            <Paragraph content='Nombre' style={style}/>
            <Paragraph content='Cargo' style={style}/>
            <Paragraph content='Telefono' style={style}/>
            <Paragraph content='Correo electronico' style={style}/>
        </div>
    )
}

