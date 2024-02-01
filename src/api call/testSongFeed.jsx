import React from 'react'

const testSongFeed = () => {

    async function fetchSong() {
        
        const res = await fetch('https://academics.newtonschool.co/api/v1/music/song?limit=20', {
            headers: {
                'projectId': 'eqg57ug7qb8d'
            }
        });
        const result = await res.json();
        console.log(result);
    }



    return (
        <div>testSongFeed</div>
    )
}

export default testSongFeed;