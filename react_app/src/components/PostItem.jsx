import React from "react";
import Address from "./Address";

const PostItem = (props) => {
    return(
        <div className="App">
      <div className="post">
        <div className="post__content">
          <strong className="Title">{props.post.title}</strong>
          <div>
            {props.post.body}
            <Address/>
          </div>
        </div>
      </div>
    </div>
    )
}
export default PostItem;