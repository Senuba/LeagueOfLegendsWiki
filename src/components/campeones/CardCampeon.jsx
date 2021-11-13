import React from "react";
import '../../assets/styles/components/CardCampeon.scss'
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const CardCampeon = (campeon,coso) => {
    const {name,imagen, objeto }=campeon.campeon
    return(
        <div className="col colCard">
            <div className="containerCard">
                <img src={imagen} alt=""/>
                <Link to={"/campeon/"+objeto.id}>
                    <div className="bottom">{name}</div>
                </Link>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </div>
    )
}

CardCampeon.propTypes = {
    campeon: propTypes.object.isRequired
}

export default CardCampeon;