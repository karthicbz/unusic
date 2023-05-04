const SongDetailsList = ({songDetails})=>{

    return(
        <>
            {songDetails.map(details=>{
                return(<div key={details.album.name+Math.random(100)}>
                    <img src={details.image[2].link} alt="album-art"/>
                    <div className="song-info">
                        <p>Name: {details.album.name}</p>
                        <p>Duration: {(parseInt(details.duration)/60).toFixed(2)}</p>
                        <p>Artist: {details.featuredArtists}</p>
                        {/* <button type="submit" onClick={window.open(details.downloadUrl[4].link)}>Download</button> */}
                        <a href={details.downloadUrl[4].link} download='song' target="_blank" rel="noopener noreferrer">Download</a>
                        {/* <form method="get" action={details.downloadUrl[4].link}>
                            <button type="submit">Download</button>
                        </form> */}
                    </div>
                </div>)
            })} 
        </>
    )
}

export default SongDetailsList;