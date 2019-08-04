const continents = require('../Helper/Helper.js');
//import { continents } from "../Helper/Helper.js"
const { assert } = require('chai');

describe ('List Continents', function(){
    it('should list continents', async function(){
       const test = await continents;      
       console.log(test.data.data);
    }

)});