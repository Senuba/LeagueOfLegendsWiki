import React, { createContext, useState, useEffect } from "react";
import {splashart_campeon,loading_campeon } from '../constants';
import { useParams } from "react-router-dom";

export const DetallesCampeonContext = createContext();

const Detalles_campeonContextProvider = ({children}) => {
    const [doneFetch, setDoneFetch] = useState(false); //constante para determinar exito del fetch
    const [campeon, setCampeon] = useState();
    

    const { nombre } = useParams()
    
    useEffect(() => {get_campeon_name(nombre)},[]);

    const get_campeon_name = (name) => {
        if(name === undefined) return "";
        fetch(`https://ddragon.leagueoflegends.com/cdn/11.20.1/data/es_ES/champion/${nombre}.json`)
        .then(response => response.json())
        .then((data) => {
            let arreglo_campeon=Object.values(data.data);         
            let url_skins=arreglo_campeon[0].skins.map((skin) =>{
                return {
                    "url_splash":`${splashart_campeon}${arreglo_campeon[0].id}_${skin.num}.jpg`,
                    "url_loading":`${loading_campeon}${arreglo_campeon[0].id}_${skin.num}.jpg`,
                    "name_skin":skin.name
                }
            });
            
            let campeon_corregido={
                "id":arreglo_campeon[0].id,
                "key":arreglo_campeon[0].key,
                "name":arreglo_campeon[0].name,
                "title":arreglo_campeon[0].title,
                "imagenes":url_skins,
                "lore":arreglo_campeon[0].lore,
                "tags":arreglo_campeon[0].tags,
                "info":arreglo_campeon[0].info,
                "stats":arreglo_campeon[0].stats,
                "allytips":arreglo_campeon[0].allytips,
                "enemytips":arreglo_campeon[0].enemytips

            };


            setCampeon(campeon_corregido)
            setDoneFetch(true)

        })
        .catch((error) => console.error(error))
    }

    return(
        <DetallesCampeonContext.Provider value={{doneFetch, campeon,get_campeon_name }}>
            {children}
        </DetallesCampeonContext.Provider>
    )
}

export default Detalles_campeonContextProvider;