import React from "react"

function Comment ({ user, commentText }) {
    return <li>{user}: {commentText}</li>
}

export default Comment