import React from "react"

function Subheader ({ viewText, uploadDate, upText, handleUp, downText, handleDown }) {
    return (
        <>
            <p>{viewText} Views | Uploaded {uploadDate}</p>
            <button onClick={handleUp}>{upText}👍</button>
            <button onClick={handleDown}>{downText}👎</button>
        </>
    )
    
}

export default Subheader