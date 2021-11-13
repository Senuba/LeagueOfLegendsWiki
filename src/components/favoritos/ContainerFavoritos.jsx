import React from "react";
import Container from '@material-ui/core/Container';
import CardFavoritos from './CardFavoritos'
import {storedValue} from "../custom-hooks/useLocalStorage";


const ContainerFavoritos = (props) => {
    const campeones = props.datos_campeones
    return (
        <Container className="">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {campeones.map((campeon,index) => {
                    return(
                        <CardFavoritos key={index} campeon={campeon}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default ContainerFavoritos;