# Backend Service Test

En el proyecto podremos encontrar 3 operaciones referidas obtener infomación del clima y la ubicación:
- /location (información de la ubicación actual)
- /current (información de la ubicación actual o de una ciudad elegida entre las 5 seleccionables, y clima actual)
- /forecast (información de la ubicación actual o de una ciudad elegida entre las 5 seleccionables, y pronóstico a 5 días)

En el proyecto se utilizaron algunas de las sugerencias establecidas en el enunciado, así como algunas librerías con las que poseía un poco más de experiencia.
Se buscó la forma más breve y concisa de concretar las especificaciones técnicas.

## Pre requisitos
> - Instalación de NodeJs (https://nodejs.org/es/)
> - Instalación de librerías del package.json (npm run install)

## Ejecución del servicio
npm run serve

## Ejecución de tests
npm run test

## Datos adicionales
- Las 5 ciudades adicionales indicadas (a elección) se pueden encontrar en el json de la carpeta config, a modo de simplificación del tratado de datos.
- Crearemos un .env en la raiz del proyecto, es decir en la misma ubicación que el readme, con los siguientes datos (en este caso para facilitar):

PORT=3000
OPEN_WEATHER_MAP_ENDPOINT=https://api.openweathermap.org/data/2.5/
OPEN_WEATHER_MAP_KEY=d9d665a88a8db5f65df3649f4395bff2
IP_API_ENDPOINT=http://ip-api.com/json/
CITY_TO_IP_PATH=./config/cityToIp.json

## Autor
José Luis Tubonetti
