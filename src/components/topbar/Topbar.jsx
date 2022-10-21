import './topbar.css';
import {Search,Person,Chat,Notifications} from '@material-ui/icons'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarleft">
          <span className="logo">facebook</span>
        </div>
        <div className="topbarCenter">
          <div className="searchbar">
            <Search className='searchIcon'/>
            <input placeholder='Search for freinds, post or videos' className='searchInput'/>
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarlinks">
            <span className="topbarlink">Homepage</span>
            <span className="topbarlink">Timeline</span>
          </div>
          <div className="topbarIcon">
            <div className="topbarIconItem">
              <Person/>
              <span className="topbarIconbadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Chat/>
              <span className="topbarIconbadge">1</span>
            </div>
            <div className="topbarIconItem">
              <Notifications/>
              <span className="topbarIconbadge">1</span>
            </div>
          </div>
          <img src="/assets/person/4.jpeg" alt="" className="topbarImg" />
        </div>
    </div>
  )
}
