const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url="https://ddragon.leagueoflegends.com/cdn/11.20.1/data/es_ES/";
const base_imagenes="http://ddragon.leagueoflegends.com/cdn/img/champion/";


export const campeones = () => `${base_url}champion.json`;
export const buscar_campeon = (campeon) => `${base_url}champion/${campeon}.json`;
export const splash_campeon = (campeon, numero) => `${base_imagenes}splash/${campeon}_${numero}.jpg`;
export const portada_campeon= (campeon, numero) => `${base_imagenes}loading/${campeon}_${numero}.jpg`;
export const loading_campeon= "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/";
export const splashart_campeon="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/"

