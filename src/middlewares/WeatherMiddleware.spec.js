import { WeatherMiddleware } from './WeatherMiddleware.js';

describe('WeatherMiddleware Object constructor', () => {
    
    let config=[];
    config['OPEN_WEATHER_MAP_ENDPOINT'] = 'https://api.openweathermap.org/data/2.5/'
    config['OPEN_WEATHER_MAP_KEY'] = 'd9d665a88a8db5f65df3649f4395bff2'
    config['IP_API_ENDPOINT'] = 'http://ip-api.com/json/'
    config['CITY_TO_IP_PATH'] = '././src/utils/test/cityToIp.json'

    it('WeatherMiddleware Object can be instantiated', () => {
        const sut = new WeatherMiddleware(config);

        should(sut).is.a.instanceof(WeatherMiddleware)
    });

    it('Given a Location function without data, then it response success', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.location()
        should('success').is.deepEqual(response.status)
    });

    it('Given a Location function with valid data, then it response the country', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.location('24.0.0.0')
        should('United States').is.deepEqual(response.country)
    });

    it('Given a Location function with invalid data, then it response fail', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.location('Rome')
        should('fail').is.deepEqual(response.status)
        should('invalid query').is.deepEqual(response.message)
    });

    it('Given a City Weather function without data, then it response success', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.cityWeather()
        should('success').is.deepEqual(response['City Information'].status)
        should(200).is.deepEqual(response['Report Information'].cod)
    });

    it('Given a City Weather function with valid data, then it response success', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.cityWeather('Rome')
        should('success').is.deepEqual(response['City Information'].status)
        should(200).is.deepEqual(response['Report Information'].cod)
    });

    it('Given a City Weather function with invalid data, then it response without information', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.cityWeather('123.0.0.0')
        should('No Information').is.deepEqual(response['City Information'])
        should('No Information').is.deepEqual(response['Report Information'])
    });

    it('Given a City Forecast function without data, then response success', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.cityForecast()
        should('success').is.deepEqual(response['City Information'].status)
        should('200').is.deepEqual(response['Report Information'].cod)
    });

    it('Given a City Forecast function with valid data, then response success', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.cityForecast('Rome')
        should('success').is.deepEqual(response['City Information'].status)
        should('200').is.deepEqual(response['Report Information'].cod)
    });

    it('Given a City Forecast function with invalid data, then response without information', async () => {
        const sut = new WeatherMiddleware(config);
        const response = await sut.cityForecast('123.0.0.0')
        should('No Information').is.deepEqual(response['City Information'])
        should('No Information').is.deepEqual(response['Report Information'])
    });

})