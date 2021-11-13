import React, { Fragment, useContext } from "react";
import ContainerFavoritos from "./ContainerFavoritos";
import notFound from "../../assets/static/images/notFound.png";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import ButtonPrimary from "../comunes/ButtonPrimary";
import "../../assets/styles/components/Favoritos.scss";

const Campeones_index = () => {
    const value=useLocalStorage();
    


    return (
        <Fragment>
        <div className="row">
            <div className="col"><h1>Favoritos</h1></div>
        </div>
            <div className="containerHeight">
            {
                value.length ? ( <ContainerFavoritos datos_campeones={value} />) : 

                
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4"><img src={notFound} alt="" width="80%" /></div>
                    <div className="col-md-5"><strong><h2>No se encontraron resultados...</h2></strong><ButtonPrimary type="back" to="/"></ButtonPrimary> </div>
                    <div className="col-md-1"></div>      
                </div>
            }
            </div>
        <br></br>
        <br></br> 
            
        </Fragment>
    );
}

export default Campeones_index;
