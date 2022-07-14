import fetch from 'isomorphic-fetch';

export class Ipapi{

    constructor(config){
        this.url = config['IP_API_ENDPOINT']
    }

    async getLocation(ubication=''){
        return await fetch(this.url+ubication,{method: 'GET'})
    }
    
}
