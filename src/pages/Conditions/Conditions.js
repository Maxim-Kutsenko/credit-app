import React from 'react'
import '../../css/index.css'
import { Accordion } from '../../components/Accordion/Accordion';


export const Conditions = (props) => {


    
    return (
        <div className="conditions">
            <div className="container">
                <h2 className="subtitle">{props.getItemText('i-2')}</h2>
                <div className="conditions__wrap">
                    <div className="accordion">
                        <Accordion
                            title={props.getItemText('1-g')}
                            text={props.getItemText('1-gg')}
                        />
                        <Accordion
                            title={props.getItemText('2-g')}
                            text={props.getItemText('2-gg')}
                        />
                        <Accordion
                            title={props.getItemText('3-g')}
                            text={props.getItemText('3-gg')}
                        />
                        <Accordion
                            title={props.getItemText('4-g')}
                            text={props.getItemText('4-gg')}
                        />
                    </div>
                    <div className="conditions__info">
                    <h3 className="conditions__title">{props.getItemText('1-r')}</h3>
                    <hr />
                    <p>{props.getItemText('2-ir')} <span className="gray">{props.getItemText('3-ir')}</span></p>
                    <p>{props.getItemText('4-ir')}</p>
                    <p className="return">{props.getItemText('5-ir')}</p>
                    <p>{props.getItemText('6-ir')}</p>
                </div>
                </div>
            </div>
        </div>
    )
}