import './rightbar.css'
import {User} from '../../dummydata'
export default function Rightbar({profile}) {

  const HomeRightbar=()=>{
    return(
      <>
       <div className="birthdayContainer">
          <img className='birthdayImg' src="assets/gift.png" alt="" />
          <span className="birthdayText"><b>pola foster</b> and<b> 2 other</b> have Birthday Today</span>
      </div>
      <img src="/assets/ad.jpeg" alt="" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">

    {
      User.map((u)=>{
        return(
              <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img src={u.profilePicture} alt="" className="rightbarProfile" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUser">{u.username}</span>
        </li>
        )
      })
    }
        
      </ul>
      </>
    )
  }

  const ProfileRightbar=()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">City :</span>
          <span className="rightbarInfoValue">New York :</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">From :</span>
          <span className="rightbarInfoValue">India</span>
        </div>

        <div className="rightbarInfoItem">
          <span className="rightbarInfokey">Reletionship :</span>
          <span className="rightbarInfoValue">single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src="/assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>

        <div className="rightbarFollowing">
          <img src="/assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John carter</span>
        </div>
      </div>

      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapp">
       { profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
