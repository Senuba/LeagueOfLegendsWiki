
import React, {lazy,Suspense} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './assets/styles/style.scss'

//Componentes
import Layout from './components/comunes/Layout'
import Campeones from './components/campeones/index'
import CampeonesContext from "./contexts/campeonesContext";
import DetallesCampeon from "./components/detalles_campeon"
import DetallesCampeonContext from "./contexts/detalles_campeonContext";
import NotFound from "./components/notFound";
import CircularProgress from "@material-ui/core/CircularProgress";
const Favoritos = lazy(() => import("./components/favoritos"));

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense
                    fallback={
                    <div className="containerHeight">
                        <div className="row">
                            <div className="col text-center">
                                <CircularProgress />
                                <h5 style={{color:"white"}}>Loading</h5>
                            </div>
                        </div>
                    </div>
                }>
                    <Switch>
                        <Route exact path = '/' >
                            <CampeonesContext>
                                <Campeones/>
                            </CampeonesContext>
                        </Route>
                        <Route exact path = '/campeon/:nombre'>
                            <DetallesCampeonContext>
                                <DetallesCampeon/>
                            </DetallesCampeonContext>
                        </Route>
                        <Route exact path = '/favoritos' component={Favoritos}/>
                        <Route  component={NotFound}/>
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
