const UserInputs = ({getSongDownloadLinks, inputText, changeInput})=>{
    return(
        <div>
            <input type="text" value={inputText.replace(' ', '+')} onChange={changeInput}/>
            <button onClick={getSongDownloadLinks}>Search</button>
        </div>
    )
}

export default UserInputs;