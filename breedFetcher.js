const request = require('request');

request('http://www.google.com', (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status Code:', response.statusCode);
  } else {
    console.log('Request library is loaded successfully.');
  }
});