import fetch from 'isomorphic-fetch';

export class Openweathermap{

    constructor(config){
        this.endpoint = config['OPEN_WEATHER_MAP_ENDPOINT']
        this.appid = `&appid=${config['OPEN_WEATHER_MAP_KEY']}`
    }

    async getCurrentWeather(city){
        return await fetch(`${this.endpoint}weather?q=${city}${this.appid}`,{method: 'GET'})
    }
    
    async getFiveDaysForecast(city){
        return await fetch(`${this.endpoint}forecast?q=${city}${this.appid}`,{method: 'GET'})
    }
    
}