import "./post.css"

import {FiMoreVertical} from 'react-icons/fi';

export default function Post() {
  return (
    <div className="post">
       <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img className="postProfileImg" src="/assets/images2.jpg" alt="" />
                <span className="postUsername">Rajan Bahadur shahi :</span>
                <span className="postDate">5 mins ago</span>
            </div>
            <div className="postTopRight">
                <FiMoreVertical/>
            </div>
        </div>
        <div className="postcenter">
            <span className="postText">Hey! its my first post:</span>
            <img className="postImg" src="assets/images3.jpg" alt="" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img className="likeIcon" src="assets/heart.png" alt="" />
                <img className="likeIcon" src="assets/like.png" alt="" />
                <span className="postlikeCounter">32people like it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">9 Comments</span>
            </div>
        </div>
       </div>
    </div>
  )
}
