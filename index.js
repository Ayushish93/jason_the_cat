const { fetchBreedDescription } = require('./breedFetcher.js');


const breedName = process.argv.slice(2);
const checkInput = (breedName) => {   

    let userInput = "";
    if(breedName.length > 1) {
        for(let i in breedName) {
            userInput += breedName[i] + " ";
        }
    }
    else {
        userInput += breedName;
    }
    return userInput.trim();
    
    }
let breedNameNew = checkInput(breedName);    


fetchBreedDescription(breedNameNew, (error, desc) => {
    if (error) {
      console.log('Error fetch details:', error);
    } else {
      console.log(desc);
    }
  });


  