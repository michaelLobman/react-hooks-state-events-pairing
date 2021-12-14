import React, { useState } from "react"

import Header from "./Header"
import Video from "./Video"
import CommentSection from "./CommentSection"

import video from "../data/video.js";

const {comments, createdAt, downvotes, embedUrl, id, title, upvotes, views} = video


/*
| App
|-- Header
  |-Views
  |-Likes
  |-Comments Button
|-Comments
*/


function App() {

  const [up, upSetter] = useState(upvotes);
  const [down, downSetter] = useState(downvotes);

  console.log("Here's your data:", video);
  console.log(views)

  function handleUp() {
    upSetter(up => up + 1)
  }

  function handleDown() {
    downSetter(down => down + 1)
  }


  return (
    <div className="App">
      <Video embedUrl={embedUrl}/>
      <Header 
        title={title} 
        viewText={views} 
        uploadDate={createdAt}
        upText={up}
        handleUp={handleUp}
        downText={down}  
        handleDown={handleDown}
      />
      <br></br>
      <CommentSection comments={comments} />
    </div>
  );
}

export default App;
