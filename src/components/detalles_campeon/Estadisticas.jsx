import React,{useState} from "react";
import propTypes from 'prop-types';

function changeWidth (id,value) {
    if (document.getElementById(id) != null) {
        document.getElementById(id).style.width=value+"%"
        document.getElementById(id).style.transition= 'width 2s'
    }
}

const EstadisticasCampeon = (props) => {
    const [defaultValues] = useState({"powerstats":{"attack":0,"defense":0,"magic":0,"difficulty":0}})
    const {attack,defense,magic,difficulty} = Object.keys(props.powerstats).length !== 0 ? props.powerstats : defaultValues
    
    
    let allytips=props.campeon_objeto ? props.campeon_objeto.allytips : ["sin datos"] ;
    let enemytips=props.campeon_objeto? props.campeon_objeto.enemytips : ["sin datos"];
    
    
    changeWidth("attack",attack*10)
    changeWidth("defense",defense*10)
    changeWidth("magic",magic*10)
    changeWidth("difficulty",difficulty*10)

    return(
        <div className="col-3 p-0 mt-4" style={{maxWidth:"100%"}}>
            <div className="row consejos">
                <div className="col tips">
                    <h3>Tips Cuando es aliado:</h3>
                    <ul>
                        {
                            allytips.map((ally)=>{
                                return <li>{ally}</li>
                            })
                        }
                    </ul>
                    <hr/>
                    <h3>Tips Cuando es enemigo:</h3>
                    <ul>
                        {
                            enemytips.map((enemy)=>{
                                return <li>{enemy}</li>
                            })
                        }
                    </ul>
                    
                </div>
                <div className="col">
                    <div className="powerStatsBox">
                        <div className="col colTitle">
                            Estadisticas:
                        </div>
                        <div className="p-3">
                            <div className="col">Poder</div>
                        <div className="progress ml-4">
                            <div id="attack" className="attack"></div>
                        </div>

                        <div className="col">Defensa</div>
                        <div className="progress ml-4">
                            <div id="defense" className="defense"></div>
                        </div>

                        <div className="col">Magia</div>
                        <div className="progress ml-4">
                            <div id="magic" className="magic"></div>
                        </div>

                        <div className="col">Dificultad</div>
                        <div className="progress ml-4">
                            <div id="difficulty" className="difficulty"/>
                        </div>
                        <br/>
                        <br/>
                        
                </div>
                
            </div>
            </div>         
            </div>
            <hr/>
                
        </div>
    )
}

EstadisticasCampeon.propTypes = {
    powerstats: propTypes.object
}

export default EstadisticasCampeon;