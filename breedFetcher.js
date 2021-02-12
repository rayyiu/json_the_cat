const request = require("request");

const fetchBreedDescription = function(breedName, callback){
 const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
 request(URL, (error, response, body) => {
    // if (error) {
    //   console.log("error: ", error);
    //   return;
    // }
    const data = JSON.parse(body);
    if (!data[0]) {
      console.log("breed not found");
      return;
    }
    const breedDescription = data[0].description;

  callback(error, breedDescription)
    // console.log(error);
  })
  }



// }

module.exports = fetchBreedDescription