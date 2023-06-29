import "./topbar.css"

import { BsSearch, BsFillPersonFill } from 'react-icons/bs';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';





// import {Search, Person} from "@material-ui/icons"
export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarLeft">
        <span className="logo">Rajan shahi social media</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <BsSearch className="searchIcon" />
          <input placeholder="Sarch for friend,post or video" className="searchinput" />


        </div>

      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">Timeline</span>
        </div>

        <div className="topbarIcons">

          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItem">
            <BsFillChatLeftTextFill />
            <span className="topbarIconBadge">2</span>
          </div>

          <div className="topbarIconItem">
            <IoMdNotifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/images2.jpg" alt="" className="topbarImage" />
      </div>

    </div>
  )
}
