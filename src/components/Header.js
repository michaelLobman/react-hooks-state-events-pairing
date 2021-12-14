import React from "react"
import Subheader from "./Subheader"

function Header ({title, viewText, uploadDate, upText, handleUp, downText, handleDown }) {
    return (
        <div>
            <h1>{title}</h1>
            <Subheader 
                viewText={viewText} 
                uploadDate={uploadDate} 
                upText={upText}
                handleUp={handleUp}
                downText={downText}
                handleDown={handleDown}
            />
        </div>
    )
}

export default Header;