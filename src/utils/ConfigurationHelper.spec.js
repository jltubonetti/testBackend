import should from "should";
import { ProgramConfiguration } from './ConfigurationHelper.js';

describe('ConfigurationHelper', () => {

    it('Given a .env test file, then fileConfig returns the correct values', () => {
        const config = ProgramConfiguration.fileConfig('./src/utils/test/test.env')

        should('1487').is.deepEqual(config['PORT'])
        should('someMapEndpoint').is.deepEqual(config['OPEN_WEATHER_MAP_ENDPOINT'])
        should('someMapKey').is.deepEqual(config['OPEN_WEATHER_MAP_KEY'])
        should('someIpEndpoint').is.deepEqual(config['IP_API_ENDPOINT'])
    })

    it('Given a .env test file that is not found, then it throws an exception', () => {
        should(() => ProgramConfiguration.fileConfig('notest.env')).throwError('notest.env file not found');
    });
})