const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

    const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
   
   
    request(url, (error, response, body) => {
    
    if(error) {
      return callback(error,null); 
    }
    

    const data = JSON.parse(body);
    if(data[0]) {
      let desc = data[0]['description'];
      return callback(null,desc);
    } else {
       let noDesc = "Breed Not Found";
       return callback(noDesc,null);
    }
    
      
    });
    
};



module.exports = {fetchBreedDescription};