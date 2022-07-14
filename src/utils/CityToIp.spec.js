import should from "should";
import { CityToIp } from "./CityToIP.js";
import { ProgramConfiguration } from "./ConfigurationHelper.js";


describe('CityToIp', () => {
    
    it('Given a json information ip file, then FromConfiguration returns the correct values', () => {
        const config = ProgramConfiguration.fileConfig('./src/utils/test/test.env')
        const jsonFile = CityToIp.FromConfiguration(config)

        should('101.56.0.0').is.deepEqual(jsonFile['Rome'])
        should('92.202.125.210').is.deepEqual(jsonFile['Yokohama'])
    })

    it('Given a json information ip file that is not found, then it throws an exception', () => {
        const config = ProgramConfiguration.fileConfig('./src/utils/test/testWithoutCity.env')
        should(() => CityToIp.FromConfiguration(config)).throwError('CITY_TO_IP_PATH file not found');
    });
})