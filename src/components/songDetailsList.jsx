const SongDetailsList = ({songDetails})=>{

    return(
        <>
            {songDetails.map(details=>{
                return(<div key={details.album.name+Math.random(100)}>
                    <img src={details.image[2].link} alt="album-art"/>
                    <div className="song-info">
                        <p>Name: {details.album.name}</p>
                        <p>Duration: {(parseInt(details.duration)/60).toFixed(2)}</p>
                        <a href={details.downloadUrl[4].link} download='song' target="_blank" rel="noopener noreferrer">Download</a>
                    </div>
                </div>)
            })} 
        </>
    )
}

export default SongDetailsList;