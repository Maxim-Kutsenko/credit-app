import React from 'react';
import '../../css/index.css'
import { useState } from "react";

export const Accordion = (props) => {

    const [open, setOpen] = useState(false)
    
    return (

        <div className={open ? 'accordion__item accordion__item--active' : 'accordion__item'} >
            <div  className="accordion__heading" onClick={()=>setOpen(!open)}>
                <div className="accordion__title">{props.title}</div>
                <div className="accordion__icon"></div>
            </div>
            
            <div className={open ? 'accordion__content' : 'accordion__content--hidden'}>
                <ul>
                    {props.text.split(';').map( (item,index) => <li key={index}><span >{item}</span></li> )}
                </ul>
            </div>
        </div>
    )
}