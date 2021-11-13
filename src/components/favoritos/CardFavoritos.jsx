import React from "react";
import '../../assets/styles/components/CardCampeon.scss'
import { Link } from "react-router-dom";
import propTypes from 'prop-types';

const CardFavoritos = (props) => {
    const {name,imagenes ,id}=props.campeon
    return(
        <div className="col colCard">
            <div className="containerCard">
                <img src={imagenes[0].url_loading} alt=""/>
                <Link to={"/campeon/"+id}>
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

CardFavoritos.propTypes = {
    campeon: propTypes.object.isRequired
}

export default CardFavoritos;