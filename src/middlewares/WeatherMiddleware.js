import { Ipapi } from "../services/Ipapi.js";
import { Openweathermap } from "../services/Openweathermap.js";
import { CityToIp } from "../utils/CityToIP.js";

export class WeatherMiddleware{

    constructor(config){
        this.ip = new Ipapi(config);
        this.openweathermap = new Openweathermap(config);
        this.cityToIp = CityToIp.FromConfiguration(config);
        this.noInfoTag = 'No Information'
    }

    async location(ip){
        let currentIp = '';
        if (ip){
            currentIp = ip;
        }
        return await this.ip.getLocation(ip).then(res => res.json())
    }

    async cityWeather(city=''){
        let cityInfo
        let weatherInfo
        const filteredInfo = this.filterInformation(city)
        if (filteredInfo !== this.noInfoTag){
            cityInfo = await this.location(filteredInfo)
            weatherInfo = await this.openweathermap.getCurrentWeather(cityInfo['city']).then(resp => resp.json())
        }else{
            cityInfo = this.noInfoTag
            weatherInfo = this.noInfoTag
        }
        return this.formatReport(cityInfo,weatherInfo)
    }

    async cityForecast(city=''){
        let cityInfo
        let weatherInfo
        const filteredInfo = this.filterInformation(city)
        if (filteredInfo !== this.noInfoTag){
            cityInfo = await this.location(filteredInfo)
            weatherInfo = await this.openweathermap.getFiveDaysForecast(cityInfo['city']).then(resp => resp.json())
        }else{
            cityInfo = this.noInfoTag
            weatherInfo = this.noInfoTag
        }
        return this.formatReport(cityInfo,weatherInfo)
    }

    formatReport(city,weather){
        return {
            'City Information':city,
            'Report Information':weather
        }
    }

    filterInformation(city){
        if (city == ''){
            return city;
        }
        if (this.cityToIp[city]){
            return this.cityToIp[city]
        }
        return this.noInfoTag
    }

}