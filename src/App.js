import './App.css';
import UserInputs from './components/userInputs';
import { useState } from 'react';
import fetchSongs from './scripts/fetchSongs';
import SongDetailsList from './components/songDetailsList';

function App() {
  const [inputText, setInputText] = useState('');
  const [details, setDetails] = useState([]);

  function handleInput(e){
    setInputText(e.target.value);
  }

  function handleClick(){
    const url = `https://saavn.me/search/songs?query=${inputText}&page=1&limit=10`;
    const songs = fetchSongs(url);
    songs.then(songDetails=>{
      setDetails(songDetails);
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <div className="App">
      <UserInputs inputText={inputText} changeInput={handleInput} getSongDownloadLinks={handleClick}/>
      <div className='fetched-song-list'>
        <SongDetailsList songDetails={details}/>
      </div>
    </div>
  );
}

export default App;
