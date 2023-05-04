const fetchSongs = async (url)=>{
    try{
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
    }catch(err){
        console.log(err);
    }
}

export default fetchSongs;