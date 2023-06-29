import "./sidebar.css"
import { MdRssFeed } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { MdVideoLibrary } from "react-icons/md";
import { RiGroupFill } from "react-icons/ri";
import { HiBookmark } from "react-icons/hi";
import { AiFillQuestionCircle } from "react-icons/ai";
import { BiCalendarEvent } from "react-icons/bi";
import { FaDiscourse } from "react-icons/fa";
import { MdWork } from "react-icons/md";




export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="siderbarList">
          <li className="sidebarListIteam">
            <MdRssFeed className="sidebarIcon" />
            <span className="sidebarListIteamText">Feed</span>

          </li>
          <li className="sidebarListIteam">
            <BsFillChatLeftTextFill className="sidebarIcon" />
            <span className="sidebarListIteamText">BsFillChatLeftTextFill</span>

          </li>
          <li className="sidebarListIteam">
            <MdVideoLibrary className="sidebarIcon" />
            <span className="sidebarListIteamText">MdVideoLibrary</span>
          </li>

          <li className="sidebarListIteam">
            <RiGroupFill className="sidebarIcon" />
            <span className="sidebarListIteamText">RiGroupFill</span>
          </li>

          <li className="sidebarListIteam">
            <HiBookmark className="sidebarIcon" />
            <span className="sidebarListIteamText">HiBookmark</span>
          </li>

          <li className="sidebarListIteam">
            <AiFillQuestionCircle className="sidebarIcon" />
            <span className="sidebarListIteamText">AiFillQuestionCircle</span>
          </li>

          <li className="sidebarListIteam">
            <BiCalendarEvent className="sidebarIcon" />
            <span className="sidebarListIteamText">BiCalendarEvent</span>
          </li>

          <li className="sidebarListIteam">
            <FaDiscourse className="sidebarIcon" />
            <span className="sidebarListIteamText">FaDiscourse</span>
          </li>

          <li className="sidebarListIteam">
            <MdWork className="sidebarIcon" />
            <span className="sidebarListIteamText">MdWork</span>
          </li>
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">upendra Bahadur Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Kamal Bahadur Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Tapendra Bahadur Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Bhoj Bhul </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Gita Bista </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">chet Bahadur Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Rampura Kumari Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Jun Parsad Rokaya </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Puran Bahadur Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Jagat Bahadur Shahi </span>
          </li>

          <li className="sidebarFriend">
            <img className="sidebarFriendImg" src="/assets/images3.jpg" alt="" />
            <span className="sidebarFriendName">Asmita shah </span>
          </li>
        </ul>

      </div>

    </div>
  )
}
