import React from "react";
import Container from '@material-ui/core/Container';
import CardSkin from './CardSkin'


const ContainerSkins = (props) => {
    const objeto_campeon = props.campeon
    console.log(props)
    return (
        <Container className="">
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                {objeto_campeon.imagenes.map((imagen,index) => {
                    
                    return(
                        <CardSkin key={index} campeon={imagen}/>
                    )
                })}
            </div>
        </Container>
    )
}

export default ContainerSkins;