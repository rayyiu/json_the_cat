const fetchBreedFetcher = require('./breedFetcher')
const commandLineInput = process.argv.slice(2);
const breedName = commandLineInput[0];
fetchBreedFetcher(breedName, (error, breedDescription) => {
    if (error) {
        console.log("error: ", error);
    } else {
        console.log(breedDescription);
    }
});