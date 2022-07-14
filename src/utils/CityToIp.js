import * as fs from 'fs';

export class CityToIp{

    static FromConfiguration(config){
        let file = config['CITY_TO_IP_PATH']
        if ( !fs.existsSync(file) ) {
            throw new Error(`CITY_TO_IP_PATH file not found`);
        }else{
            const cityToIp = fs.readFileSync(file);
            const jsonCityToIp = JSON.parse(cityToIp.toString());
        return jsonCityToIp
        }
}
}