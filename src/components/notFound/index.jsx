import React, {Fragment} from "react";
import Message from "../comunes/Message";
import ButtonPrimary from "../comunes/ButtonPrimary";
import notFound from "../../assets/static/images/notFound.png"

const NotFound = () => (
    <Fragment>

        <div className="row">
            <div className="col centrar tamaño_fuente"><Message text="404: Url Not Found" /></div>
        </div><br></br>
        <div className="row">
            <div className="col centrar"><ButtonPrimary type="back" to="/"></ButtonPrimary></div>
        </div><br></br>
        <div className="row">
            <div className="col centrar"><img src={notFound} alt="" /></div>
        </div>

        

    </Fragment>
);

export default NotFound;

