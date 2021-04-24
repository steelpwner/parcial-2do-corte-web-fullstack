import {Fragment} from 'react';

/* DIEGO MOLINA FUNCIÓN CREACIÓN DE HEADER DE LA APLICACIÓN */
function Header({titulo,logo}) {
    return (
        <Fragment>
            <div className="header">
                <span>
                    <img src={logo} id="logo"/>{titulo}
                </span>
            </div>
        </Fragment>
    )
}

export default Header;