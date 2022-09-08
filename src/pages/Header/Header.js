import '../../css/index.css'


export const Header = (props) => {

    return (
        <header className="header">

            <div className="container">
                <a href="/" className="logo"><img src="./img/logo.svg" alt="logo" /></a>
                <h1>
                <div className="main-title">
                    <div className="main-title__item">{props.getItemText('1-z')}</div><br />
                    <div className="main-title__item">{props.getItemText('2-z')} <span className="blue-title">{props.getItemText('3-z')}</span> {props.getItemText('4-z')} <span
                            className="blue-title">{props.getItemText('5-z')}</span></div>
                </div>
                <div className="main-title--d">
                    <div className="main-title__item">{props.getItemText('1-z')}<p> {props.getItemText('2-z')}<span className="blue-title"> {props.getItemText('3-z')}</span> {props.getItemText('4-z')} <span className="blue-title">{props.getItemText('5-z')}</span>
                        </p>
                    </div>
                </div>
            </h1>
            </div>
        </header>
    )
}