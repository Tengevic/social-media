import './home.css'
import Feed from '../../components/feed/feed'
import Rightbar from '../../components/rightbar/rightbar'
import Sidebar from '../../components/Sidebar/sidebar'
import Topbar from '../../components/Topbar'

export default function home() {
    return (
        <>
           <Topbar/>
           <div className="homeContainer">
               <Sidebar/>
               <Feed/>
               <Rightbar/>
           </div>
            
        </>
    )
}
