import React from "react";
import '../../assets/styles/components/CardCampeon.scss'
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const CardSkin = (props) => {
    const { url_loading,url_splash,name_skin}=props.campeon
    
    return(
        <div className="col colCard">
            <div className="containerCard">
                <img src={url_loading} alt="Snow"/>
                <a href={url_splash} target="_blank">
                    <div className="bottom">{name_skin!=="default" ? name_skin : "Original"}</div>
                </a>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
        
    )
}

CardSkin.propTypes = {
    campeon: propTypes.object.isRequired
}

export default CardSkin;