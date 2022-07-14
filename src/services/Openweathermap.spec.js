import should from "should";
import { Openweathermap } from "./Openweathermap.js";


describe('Openweathermap Object constructor', () => {

    let config=[];
    config['OPEN_WEATHER_MAP_ENDPOINT'] = 'https://api.openweathermap.org/data/2.5/'
    config['OPEN_WEATHER_MAP_KEY'] = 'd9d665a88a8db5f65df3649f4395bff2'

    it('Openweathermap Object can be instantiated', () => {
        const sut = new Openweathermap(config);

        should(sut).is.a.instanceof(Openweathermap)
    });

    it('Given a Weather Function with valid data, then it response 200', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getCurrentWeather('Rome').then(res => res.json())
        should(200).is.deepEqual(response.cod)
    });

    it('Given a Weather Function without data, then it response bad query', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getCurrentWeather().then(res => res.json())
        should('400').is.deepEqual(response.cod)
        should('bad query').is.deepEqual(response.message)
    });

    it('Given a Weather Function with valid data, then it response with country weather information', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getCurrentWeather('Rome').then(res => res.json())
        should('Rome').is.deepEqual(response.name)
    });

    it('Given a Weather Function with invalid data, then it response with information not found', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getCurrentWeather('24.0.0.0').then(res => res.json())
        should('404').is.deepEqual(response.cod)
        should('city not found').is.deepEqual(response.message)
    });

    it('Given a Forecast Function with valid data, then it response with 200', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getFiveDaysForecast('Rome').then(res => res.json())
        should('200').is.deepEqual(response.cod)
    });

    it('Given a Forecast Function without data, then it response with bad query', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getFiveDaysForecast().then(res => res.json())
        should('400').is.deepEqual(response.cod)
        should('bad query').is.deepEqual(response.message)
    });

    it('Given a Forecast Function with valid data, then it response with country forecast information', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getFiveDaysForecast('Rome').then(res => res.json())
        should('Rome').is.deepEqual(response.city.name)
    });

    it('Given a Forecast Function with invalid data, then it response with information not found', async () => {
        const sut = new Openweathermap(config);
        const response = await sut.getFiveDaysForecast('24.0.0.0').then(res => res.json())
        should('404').is.deepEqual(response.cod)
        should('city not found').is.deepEqual(response.message)
    });
    
});