
import './Online.css'

export default function Online({user}) {
    return (
        <div>
             <li className="rightbarFriend">
                <div className="rightbarImgContainer">
                    <img  className="rightbarProfileImg" src={user.profilePicture} alt="" />
                    <span className="rightbarOnlineFriend"> </span>
                </div>
                    <span className="rightbarUsername">{user.username}</span>
            </li>
        </div>
    )
}
