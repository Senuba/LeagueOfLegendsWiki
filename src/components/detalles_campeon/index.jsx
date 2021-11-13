import React, { Fragment, useContext, useState } from "react";
import { DetallesCampeonContext } from './../../contexts/detalles_campeonContext'
import ContainerSkins from "./ContainerSkins";
import ProgressBar from "../comunes/ProgressBar";
import EstadisticasCampeon from "./Estadisticas";
import {setStoredValue} from "../custom-hooks/useLocalStorage";
import Modal from "../modals/Modal";
import UseModal from "../custom-hooks/UseModal";

import "../../assets/styles/components/DetallesCampeon.scss";

const DetallesCampeon_index = () => {
    const { doneFetch,campeon } = useContext(DetallesCampeonContext);
    const {modal, handleCloseModal, handleOpenModal}=UseModal();
    
    let campeon_objeto= campeon ? campeon : {name:"",id:"",imagenes:[{url_splash:""}],info:[{}],enemytips:[],allytips:[],tags:[],stats:{}}; 
    //let background_campeon = campeon_objeto.imagenes[0].url_splash;
    let loading_imagen=`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/${campeon_objeto.id}.png`;
    let Estadisticas=campeon_objeto.info;
    let storage=JSON.parse(localStorage.getItem("favoritos"));

    const [value1, setValue1]=useState(false);
    const [mensaje, setMensaje]=useState("");

    const agregarFavorito = (e) => {
        e.preventDefault();
        const items=localStorage.getItem("favoritos");
        if(items==null){
            let value=JSON.stringify([campeon_objeto]);
            localStorage.setItem("favoritos",value);
        }
        else{
            for (let i=0;i < storage.length;i++){
                if(storage[i].id === campeon_objeto.id){

                    setMensaje("Ya lo tienes en Favoritos...");
                    handleOpenModal();
                    break;
                }
                if((storage.length)-1=== i){
                    const parse_items=JSON.parse(items);
                    parse_items.push(campeon_objeto);
                    localStorage.setItem("favoritos",JSON.stringify(parse_items));
                    setMensaje("Campeon agregado a favoritos...");
                    handleOpenModal();
                }
            } 
        }
    }
    return (
        <Fragment>
            <Modal isOpen={modal} onClose={handleCloseModal} >
            <div className="characterDetail imagen_fondo" style={{backgroundImage:loading_imagen}}>
                <div className="row">
                    <div className="col mensaje"><h1>{mensaje}</h1></div>
                </div>
            </div>
            </Modal>
        <form onSubmit={agregarFavorito}>
        
        <div className="row">
            <div className="col center">
                {<img src={loading_imagen} height="250.5em" width="" ></img>}
                
                
            </div>
            <div className="col center"><h1>{campeon_objeto.name}</h1></div>
            {
                
                value1 !== true ? <div className="col padding"> <button type="submit" className="btn btn-success glyphicon glyphicon-star padding" >Agregar Favorito</button></div> : ""
            }
        </div>
        <div className="row">
            <div className="col center">
                <span><h2>{campeon_objeto.title}</h2></span>
            </div>
        </div>
        
        <div className="row parrafo" style={{backgroundColor: 'rgb(60 57 57 / 83%)', color: 'white'}}>
            <div className="col center">
                <h3>Historia:</h3>
                <span><p>{campeon_objeto.lore}</p></span>
            </div>
        </div>
        <div className="row">
            <div className="col center">
                <h2>Estadisticas Campeon:</h2>

            </div>
        </div>

        <div className="row">
            <div className="col center">
                <EstadisticasCampeon powerstats={Estadisticas} campeon_objeto={campeon_objeto}/>
                
            </div>
        </div>

        <div className="row">
            <div className="col center">
                <h2>Skins:</h2>
            </div>
        </div>
            <div className="containerHeight">
                {doneFetch ? (
                    
                    <ContainerSkins campeon={campeon}/>
                ) : (<ProgressBar />)}
            </div>
            <br></br>
            <br></br>

            </form>
            
        </Fragment>
        );
}

export default DetallesCampeon_index;
