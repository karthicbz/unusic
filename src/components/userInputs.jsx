const UserInputs = ({getSongDownloadLinks, inputText, changeInput})=>{
    return(
        <div className="input-fields">
            <input 
            type="text" 
            value={inputText.replace(' ', '+')} 
            onChange={changeInput}
            className="search-input"
            placeholder="Search any song..."/>
            <button onClick={getSongDownloadLinks} className="search-button">Search</button>
        </div>
    )
}

export default UserInputs;