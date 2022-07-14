import express from 'express';
import { WeatherMiddleware } from './middlewares/WeatherMiddleware.js';
import { ProgramConfiguration } from './utils/ConfigurationHelper.js';

const config = ProgramConfiguration.fileConfig('./.env')
const app = express();
const port = config['PORT']
const weather = new WeatherMiddleware(config);

app.use(express.json())

app.get('/v1/location', async (req,res)=>{
    res.send(await weather.location());
})

app.get('/v1/current:city?', async (req,res)=>{
    res.send(await weather.cityWeather(req.query.city));
})

app.get('/v1/forecast:city?', async (req,res)=>{
    res.send(await weather.cityForecast(req.query.city));
})

app.listen(port,()=>{
    console.log(`Weather app listening port ${port}`)
})

