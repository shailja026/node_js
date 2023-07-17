const fetch = require('node-fetch');

const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0e74008a51msh7c2ecf7b4c5b16fp1ec799jsn5832d6ad5dd9',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
  }
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}