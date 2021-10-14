import "./sidebar.css"
import { Users } from "../../dummyData"
import {Bookmark, Chat, Event, Group, HelpOutline, PlayCircleFilled, RssFeed, School, WorkOutline} from "@material-ui/icons"
import Closefriends from "../closeFriends/Closefriends"

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItems">
                        <RssFeed className="sidabarListicon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItems">
                        <Chat className="sidabarListicon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItems">
                        <PlayCircleFilled className="sidabarListicon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItems">
                        <Group className="sidabarListicon"/>
                        <span className="sidebarListItemText">Group</span>
                    </li>
                    <li className="sidebarListItems">
                        <Bookmark className="sidabarListicon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItems">
                        <HelpOutline className="sidabarListicon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItems">
                        <WorkOutline className="sidabarListicon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItems">
                        <Event className="sidabarListicon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItems">
                        <School className="sidabarListicon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show more</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                   {Users.map(u=>(
                       <Closefriends key={u.id} user={u}/>
                   ))}
                   
                </ul>
            </div>
        </div>
    )
}
