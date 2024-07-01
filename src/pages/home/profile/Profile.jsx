import "./profile.css";
import Topbar from "./../../../component/topbar/Topbar";
import Sidebar from "./../../../component/sidebar/Sidebar";
import Feed from "../../../component/feed/Feed";
import Rightbar from "./../../../component/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/image1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/image3.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Rajan Bahadur Shahi</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
