import React from "react";
import Container from '@material-ui/core/Container';
import CardCampeon from './CardCampeon'


const ContainerCampeones = (props) => {
    const campeones = props.datos_campeones
    return (
        <Container className="">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {campeones.map((campeon,index) => {
                    return(
                        <CardCampeon key={index} campeon={campeon}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default ContainerCampeones;