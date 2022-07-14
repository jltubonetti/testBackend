import { parse } from 'dotenv';
import * as fs from 'fs';

export class ProgramConfiguration{

    static fileConfig(file){
        if ( !fs.existsSync(file) ) {
            throw new Error(`${file} file not found`);
        }else{
        return parse(fs.readFileSync(file));
        }
}
}
