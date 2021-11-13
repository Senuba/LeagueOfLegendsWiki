import React, { createContext, useState, useEffect } from "react";
import { campeones ,loading_campeon } from '../constants'

export const CampeonesContext = createContext();

const CampeonesContextProvider = ({children}) => {
    
    const [doneFetch, setDoneFetch] = useState(false); //constante para determinar exito del fetch
    const [datos_campeones, setDatos_campeones] = useState([]); //contante para albergar los datos
    const [lista,setLista] = useState([])
    const [totalLength,setTotalLength] = useState(0)

    useEffect(() => {get_data()},[]);

    const get_data = (nombre_campeon,numberSelect) => {
        const quantityItems = numberSelect !== undefined ? numberSelect: 12
        
        fetch("https://ddragon.leagueoflegends.com/cdn/11.20.1/data/es_ES/champion.json")
        .then(response => response.json()) //convertir response a json
        .then((data) => {
            
            
            setLista([])
            setDatos_campeones([])
            if(nombre_campeon){
                setLista([])
                let arreglo=Object.values(data.data);
                arreglo.forEach((campeon,index) => {
                    if( campeon.name.toLowerCase().includes(nombre_campeon)){
                        
                        if (lista.length+1<=quantityItems) lista.push({'id':campeon.key,'name':campeon.name,'imagen': `${loading_campeon}${campeon.id}_0.jpg`,objeto:campeon})
                        
                    }
                })
                setDoneFetch(true)
                setDatos_campeones(lista)
            }
            else{
                let arreglo=Object.values(data.data);
                //console.log(data);
                arreglo.forEach((campeon,index) => {
                    if (index+1<=quantityItems) {
                        lista.push({'id':campeon.key,'name':campeon.name,'imagen':`${loading_campeon}${campeon.id}_0.jpg`,objeto:campeon})
                    }
                })
                setDoneFetch(true)
                setDatos_campeones(lista)
                setTotalLength(arreglo.length)

            }
        })
        .catch(error => console.error(error))
    }

    return (
        <CampeonesContext.Provider value={{ doneFetch, datos_campeones,totalLength ,get_data }}>
            {children}
        </CampeonesContext.Provider>
    )
}

export default CampeonesContextProvider;