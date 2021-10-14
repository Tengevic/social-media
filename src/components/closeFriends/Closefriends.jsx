import './Closefriends.css'

export default function Closefriends({user}) {
    return (
        <div>
               <li className="sidebarFriendListItem">
                        <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
                        <span className="sidebarFriendText">{user.username}</span>
                </li>
        </div>
    )
}
