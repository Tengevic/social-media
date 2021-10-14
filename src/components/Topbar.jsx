import React from 'react'
import "./topbar.css"
import { Person, Search, Chat, Notifications} from '@material-ui/icons';


export default function Topbar() {
    return (
        <div className="tobarContainer">
            <div className="tobarleft">
                <span className="logo">TeshSocial</span>
            </div>
            <div className="tobarCenter">
                <div className="searchBar">
                    <Search className="searchicon"/>
                    <input placeholder="search for friends, posts, videos" className="searchImput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="tobarLink">Homepage</span>
                    <span className="tobarLink">Timeline</span>
                </div>
                <div className="tobarIcons">
                    <div className="tobarIconItem">
                        <Person/>
                        <span className="tobarIconBagde">1</span>
                        </div>
                    <div className="tobarIconItem">
                        <Chat/>
                        <span className="tobarIconBagde">1</span>
                    </div>
                    <div className="tobarIconItem">
                        <Notifications/>
                        <span className="tobarIconBagde">1</span>
                    </div>
                </div>
                <div className="topbarImgDiv">
                    <img src="/assets/images/2.jpeg" alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    )
}
