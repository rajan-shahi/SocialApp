import "./share.css";
import { MdPermMedia } from "react-icons/md";
import { BiLabel } from "react-icons/bi";
import { MdRoom } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person.jpg" alt="" />
          <input
            placeholder="What's is Your mind safak?"
            className="shareInput"
          />
        </div>
        <hr className="ShareHr" />
        <div className="shareBotton">
          <div className="shareOptions">
            <div className="shareOption">

              <MdPermMedia  className="shareIcon" color="red" />
              <span className="shareOptionText">Photo or video</span>
            </div>

            <div className="shareOption">
              <BiLabel color="blue" />
            </div>

            <div className="shareOption">
              <MdRoom color="green"/>
              <span className="shareOptionText">Location</span>
            </div>

            <div className="shareOption">
              <MdEmojiEmotions color="blcak" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>

          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
