# Bienvenidos a League of Legends Wiki
Una wiki con los campeones del videojuego League of legends con estadisticas y consejos de los campeones.

## Instalación

En la carpeta raíz del proyecto, instalar los paquetes necesarios con:
```bash
npm install
```

Una vez instalados todos los requisitos, levantar el servidor local con:
```bash
npm run dev-server
```
Al realizar algun cambio ejecutar el siguiente comando para buildear el proyecto:
```bash
npm run build
```

Luego de volver a buildear el proyecto volver a ejecutar el comando:
```bash
npm run dev-server


```
# URL Producción (vercel)
```bash
https://league-of-leyends-wiki.vercel.app/
```

# Acerca del Proyecto
Este proyecto es una wiki de los campeones de league of legends conectada a una api de Riot Games. 
# Patrones de diseño
Los patrones de diseño usados en este proyecto son:

|  Tipo | Descripción
|  -- | --
| ` Render Props` | Para comunicar las propiedades entre componentes.
|`Statefull and stateless` | Para optimizar y diferenciar los componentes desde los mas simples con una unica función de mostrar data (stateless) hasta los mas complejos (statefull) que requieren mas logica y el manejo de state dentro de estos (procesos logícos).
| ` style component` | Para desplegar un estilo en especifico segun la condicion propuesta al componente
|`hight order component` | Para pasar definiciones con context
| ` provider` | Para el manejo de context en esta aplicación web.


## Author:

👤 **Sebastian Nuñez Badilla (Senuba)**
