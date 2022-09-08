import React from 'react';
import '../../css/index.css'
import { domain } from '../..';
import arrow from '../../img/arrow.svg'
export const Banner = (props) => {
  return (
    <a
      href={props.link}
      className="banner"
      style={{ backgroundColor: props.color }}
      target="_blank" rel="noreferrer"
    >
      <div className="container">
        <div className="banner__wrap">
          <div className="banner__logo">
            <img src={domain + props.logo} alt={props.name} />
          </div>
          <div className='banner__line'></div>
          <div className="banner__text">
            <div className="banner__text-large">{props.title}</div>
            <div className="banner__text-small">{props.text}</div>
          </div>
          <a
            href={props.link}
            className="banner__btn"
            aria-hidden="true"
            target="_blank"
            rel="noreferrer"
          >
            <img src={arrow} alt="arrow" />
          </a>
        </div>
      </div>
    </a>

  )
}