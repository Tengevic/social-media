import './profile.css'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/Sidebar/sidebar'
import Topbar from '../../components/Topbar'

export default function Profile() {
    return (
        <>
            <Topbar/>
           <div className="profile">
               <Sidebar/>
               <div className="profileRight">
                    <div className="profileRightTop">addasxas</div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar/>
                    </div>
               </div>
           </div>
        </>
    )
}
