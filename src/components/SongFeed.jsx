import React, { useState, useEffect } from 'react';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
const SongFeed = () => {
  const [songData, setSongData] = useState({ data: [] });
  const [currentSongIndex, setCurrentSongIndex] = useState(null);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://academics.newtonschool.co/api/v1/music/song?limit=20', {
          headers: {
            'projectId': 'eqg57ug7qb8d'
          }
        });
        const data = await response.json();
        setSongData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const handlePlayPause = (index) => {
    const audio = document.getElementById(`mainAudio-${index}`);
    const allAudioElements = document.querySelectorAll('audio');

    // Pause all audio elements except the clicked one
    allAudioElements.forEach((audioElement, i) => {
      if (i !== index && !audioElement.paused) {
        audioElement.pause();
      }
    });

    // Toggle play/pause for the clicked audio element
    if (audio.paused) {
      audio.play();
      setCurrentSongIndex(index);
    } else {
      audio.pause();
      // setCurrentSongIndex(null);
    }
  };

  const formatMood = (mood) => {
    return mood.charAt(0).toUpperCase() + mood.slice(1).toLowerCase();
  };
  const currentSong = currentSongIndex !== null ? songData.data[currentSongIndex] : null;

  return (
    <div>
      {songData.data.map((song, index) => (
        <div key={index} className="container" >
          <div><img src={song.thumbnail} alt="thumbnail" onClick={() => handlePlayPause(index)} />
            <audio id={`mainAudio-${index}`} src={song.audio_url}></audio>
          </div>
          <div>
            <p onClick={() => handlePlayPause(index)}>{song.title}</p>
            <h4 onClick={() => handlePlayPause(index)}>{song.artist[0].name}</h4>
            <p onClick={() => handlePlayPause(index)}>{formatMood(song.mood)}</p>
            <FavoriteBorderSharpIcon />
          </div>


        </div>
      ))}
      <div >
        {currentSong && (
          <div className="footerSongs">
            <div>
              <img src={currentSong.thumbnail} alt="current thumbnail" />
            </div>
            <div>
              <p>{currentSong.title}</p>
              <h3>{currentSong.artist[0].name}</h3>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default SongFeed;
