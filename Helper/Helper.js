const axios = require("axios");

const continents = ()=>{
return axios({
  url: 'https://countries.trevorblades.com/',
  method: 'post',
  data: {
    query: `
    query{
      continents{code,name}
    }
      `
  }
})
}
console.log(continents);

module.exports = continents();