import React, { Fragment, useContext } from "react";
import { CampeonesContext } from '../../contexts/campeonesContext'
import ContainerCampeones from "./ContainerCampeones";
import SearchCampeon from "./SearchCampeon";
import ProgressBar from "../comunes/ProgressBar";
import notFound from "../../assets/static/images/notFound.png"

const Campeones_index = () => {
    const { doneFetch,datos_campeones,get_data,totalLength } = useContext(CampeonesContext);
    return (
        <Fragment>
          <div className="containerHeight">
            <SearchCampeon get_data={get_data} length={totalLength}/>
            {doneFetch ? (
                datos_campeones.length ? ( <ContainerCampeones datos_campeones={datos_campeones} />) : 

                
                <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4"><img src={notFound} alt="" width="80%" /></div>
                <div className="col-md-5"><strong><h2>No se encontraron resultados...</h2></strong> </div>
                <div className="col-md-1"></div>
                  
                  
                
                </div>
            ) : (<ProgressBar />)}
          </div>
          <br></br>
            <br></br>
        </Fragment>
      );
}

export default Campeones_index;
