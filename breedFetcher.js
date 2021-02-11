const request = require("request");
const commandLineInput = process.argv.slice(2);
const breedName = commandLineInput[0];
const URL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
request(URL, (error, response, body) => {
  if (error) {
    console.log("error: ", error);
    return;
  }
  const data = JSON.parse(body);
  if (!data[0]) {
    console.log("breed not found");
    return;
  }
  console.log(data[0].description);
  console.log(error);
})
