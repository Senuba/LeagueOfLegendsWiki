import React, {useState} from "react";
import Container from '@material-ui/core/Container';
import '../../assets/styles/components/SearchCampeon.scss'
import propTypes from 'prop-types';

const SearchCampeon = ({get_data,length}) =>{
    const [name,setName] = useState("")
    const [numberItems,setNumberItems] = useState(12)

    function onChangeNumber (e){
        setNumberItems(e.target.value)
        get_data(name,e.target.value)
    }
    return(
        <Container className="mt-3">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <input className="inputSearch" type="text" placeholder="Ingresar nombre" onChange={(e)=>setName(e.target.value)}/>
                        <button className="seachButton" onClick={() => get_data(name,numberItems)}>Buscar</button>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="">&nbsp;</div>
                <div>
                    <select class="form-select"  name="quantityItems m-3" onChange={(e)=>onChangeNumber(e)}>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={36}>36</option>
                        <option value={100}>100</option>
                        <option value={157}>157</option>
                    </select>
                </div>

                
                <div>&nbsp;<strong>campeones de: {length}</strong></div>
            </div>
        </Container>
    )

}

SearchCampeon.propTypes = {
    length:propTypes.number
}

export default SearchCampeon;