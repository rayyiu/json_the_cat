
const fetchBreedDescription = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (error, breedDescription) => {
      // we expect no error for this scenario
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, breedDescription.trim());

      done();
    });
  });
  it("returns the error if an invalid breed is passed in through the callback", (done) => {
      fetchBreedDescription('garbage', (error, breedDescription) => {
          //we expect description is null here;
          assert.equal(breedDescription, null);

          const expectedDescription = "Breed not found."
          assert.equal(expectedDescription, error)
      }) 
  })
  it("")
});