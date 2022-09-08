import React from 'react'
import '../../css/index.css'
import {Link} from 'react-router-dom'


export const Footer = (props) => (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrap">
                <div className="footer__info">
                    <p>{props.getItemText('1-f')}</p>
                </div>
                <div className="footer__contact">
                    <p>{props.getItemText('2-f')}</p><a
                        href={`mailto:${props.getItemText('3-f')}`}>{props.getItemText('3-f')}</a>
                </div>
            </div>
            <div className="footer__wrap">
                <div className="footer__copyright">
                    <p>{props.getItemText('4-f')}</p>
                </div>
                <div className="footer__links">
                    <Link to="/policy" >{props.getItemText('6-f')}</Link>
                    <Link to="/terms" >{props.getItemText('7-f')}</Link>
                </div>
            </div>
        </div>
    </footer>
)