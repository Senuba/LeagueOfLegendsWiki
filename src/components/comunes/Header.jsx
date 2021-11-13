import React from "react";
import '../../assets/styles/components/Header.scss'
import logo from '../../assets/static/images/logo1.png'

const Header = () => {

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="icon" style={{width:'100px'}}/>
                    </a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active mr-3 ml-3">
                            <a className="nav-link" href="/">Campeones</a>
                        </li>
                        <li className="nav-item active mr-3 ml-3">
                            <a className="nav-link" href="/favoritos">Favoritos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;