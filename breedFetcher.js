const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    if (data.length === 0) {
      const errorMessage = `Breed '${breedName}' not found.`;
      callback(errorMessage, null);
      return;
    }

    const breed = data[0];
    const description = breed.description;
    callback(null, description);
  });
};

module.exports = fetchBreedDescription;

