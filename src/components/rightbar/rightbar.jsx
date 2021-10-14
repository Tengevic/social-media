import "./rightbar.css"
import { Cake } from '@material-ui/icons'
import { Users } from "../../dummyData"
import Online from "../Online/Online"

export default function rightbar() {
    return (
        <div className="rightbar"> 
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <Cake htmlColor="red" className="birthdayIcon"/>
                    <span className="birthdayText"> <b> Pola Foster </b> and <b>3 others friends</b> have birthday</span>
                </div>
                <img  className="rightbarAd" src="/assets/images/4.jpeg" alt="" />
                <h4 className="rightbarTitle">Online friends</h4>
                <ul className="rightbarFriendsList">
                    {Users.map(u=>(
                        <Online  key={u.id} user={u}/>
                    ))}
                   
                </ul>
            </div>
        </div>
    )
}
