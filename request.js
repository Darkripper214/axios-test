const axios = require('axios');
let request = {
  headers: {
    'Content-Type': 'application/json',
    header1: '星',
  },
  params: {
    星: '星',
  },
};
axios.post(`http://localhost:4500/`, request).then((res) => console.log(res));
