import React from 'react';
import '../../css/index.css'
import { domain } from '../..';


export const Card = (props) => {





    return (
        <div className="cards__item">
            <div className="cards__item-inner">
                <div className="cards__label">{props.slogan}</div>
                <div className="cards__age-label">

                    <img src={`./img/${props.minAge}age.svg`} alt={props.minAge} />
                </div>
                <div className="cards__age-label--tab">
                    <img src={`./img/${props.minAge}age.svg`} alt={props.minAge} />

                </div>
                <div className="cards__logo">
                    <img src={domain + props.logo} alt={props.name} />
                </div>
            </div>
            <div className="cards__item-inner">
                <div className="cards__item-line">
                    <img src="./img/1.svg" alt="age-label" />
                    <div className="cards__text">{props.getItemText('1-p')}</div>
                    <div className="cards__text--large">{props.getItemText('1-of')} <span className="green-title">{props.amount}</span> {props.getItemText('1.1-of')}</div>
                    <div className="cards__text--large1">{props.amount}</div>
                </div>
            </div>
            <div className="arrow">
                <img src="./img/next_icon.png" alt="age-label" />
            </div>
            <div className="cards__item-inner">
                <div className="cards__item-line">
                    <img src="./img/2.svg" alt="sum" />
                    <div className="cards__text">{props.getItemText('2-p')}</div>
                    <div className="cards__text--large"><span className="bl-title">{props.term}</span> {props.getItemText('2-of')}</div>
                    <div className="cards__text--large1">{props.term}</div>
                </div>
            </div>
            <div className="arrow">
                <img src="./img/next_icon.png" alt="age-label" />
            </div>
            <div className="cards__item-inner">
                <div className="cards__item-inner">
                    <div className="cards__item-line">
                        <img src="./img/3.svg" alt="age" />
                        <div className="cards__text">ставка</div>
                        <div className="cards__text--large"><span className="blue-title">{props.percent}%</span> {props.getItemText('3-of')}</div>
                        <div className="cards__text--large1">{props.percent}%</div>
                    </div>
                </div>
            </div>
            <div className="cards__item-inner-b">
                <div className="cards__item-inner">
                    <div className="cards__item-line">
                        <img src="./img/4.svg" alt="age" />
                        <div className="cards__text">{props.getItemText('4-p')}</div>
                        <div className="cards__text--large"><span className="bl-title">{props.minAge}-{props.maxAge}</span> {props.getItemText('4-of')}</div>
                        <div className="cards__text--large1">{props.percent}%</div>
                    </div>
                </div>
            </div><a href={props.href} className="btn">{props.getItemText('1-b')}</a>
            <a href={props.href} className="cards__item-link" aria-hidden="true" target="_blank" rel = "noreferrer" >1</a>
        </div>
    )
}

