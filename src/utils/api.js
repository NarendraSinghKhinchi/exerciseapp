import axios from 'axios' ;

async function fetchData(url){
  
  const options = {
      method: 'GET',
      url: url,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        // this is the way to hide key for security purposes don't place commas or space or semicolon in .env file because it will be treate as value
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
    const options2 = {
      method: 'GET',
      url: url,
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY2,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
  try {
    const response = await axios.request(options);
    return response ;
  } catch (error) {
      
    // console.error(error);
    // there may be a chance that we reached the limit and server responded with 429 so let's try another account
    try {
      const response2 = await axios.request(options2);
      return response2 ;
    }catch{
      console.log("both accounts failed pls try console logging the error");
    }
  }
  return "error occured open console to know more" ;
}

async function fetchVideos(query){
  
  const options = {
    method: 'GET',
    url: 'https://youtube-search-and-download.p.rapidapi.com/search',
    params: {
      query: query,
    },
    headers: {
      'X-RapidAPI-Key': '1da7f1f765msh1e7827afc868273p1b038fjsnb6d961ba388f',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    return response ;
  } catch (error) {
    console.error("error occured please report or try again later");
  }
}


export {fetchData , fetchVideos} ;