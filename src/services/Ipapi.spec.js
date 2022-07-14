import should from "should";
import { Ipapi } from "./Ipapi.js";


describe('Ipapi Object constructor', () => {

    let config=[];
    config['IP_API_ENDPOINT'] = 'http://ip-api.com/json/'

    it('Ipapi Object can be instantiated', () => {
        const sut = new Ipapi(config);

        should(sut).is.a.instanceof(Ipapi)
    });

    it('Given a IP Api without data, then it response success', async () => {
        const sut = new Ipapi(config);
        const response = await sut.getLocation().then(res => res.json())
        should('success').is.deepEqual(response.status)
    });

    it('Given a IP Api with valid data, then it response the country', async () => {
        const sut = new Ipapi(config);
        const response = await sut.getLocation('24.0.0.0').then(res => res.json())
        should('United States').is.deepEqual(response.country)
    });

    it('Given a IP Api with valid data, then it response fail', async () => {
        const sut = new Ipapi(config);
        const response = await sut.getLocation('Italia').then(res => res.json())
        should('fail').is.deepEqual(response.status)
    });
    
});