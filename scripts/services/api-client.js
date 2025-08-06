//import {URL} from '../utils/config.js';
export async function getNews(URL) {
    //ES8 onwards (await and async)
    try{
  const response =  await fetch(URL);
  const data = await response.json();
  console.log('Data is ', data);
  return data;
    }
    catch(err){
        throw err;

    }

    //Make API call
    /*const promise = fetch(URL); //wrapper method XMLHttp Request
    console.log('Promise is', promise);
    promise.then(function(response){
        const pr = response.json();
        pr.then(function(data){
            console.log('Data Rec ', data);

        }).catch(function(err){
            console.log('Invalid JSON ', err);
        })

    }).catch(function(err){
        console.log('Error During Fetch News ',err);

    })*/
    //promise stages
    //1. pending stage
    //2. fulfilled
    //3. rejected stage



}
//getNews(URL);