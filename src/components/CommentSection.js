import React, { useState } from "react"
import Comment from "./Comment"

function CommentSection ({ comments }) {

    const [buttonText, buttonSetter] = useState("Hide Comments");

    function handleClick () {
        const newText = buttonText === "Hide Comments" ? "Show Comments" : "Hide Comments";
        buttonSetter(newText)
    }

    const commentList = buttonText === "Show Comments" ? null : comments.map(instance => {
        return (
             <Comment key={instance.id} user={instance.user} commentText={instance.comment} />
        )})


    return (
        <section>
            <button onClick={handleClick}>{buttonText}</button>
            <h2>{comments.length} Comments</h2>
            <ul>
                {commentList}
            </ul>
        </section>
    )
}

export default CommentSection