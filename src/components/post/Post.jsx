import './post.css'
import { Favorite, MoreVert, ThumbUpAlt } from '@material-ui/icons'
import { Users} from "../../dummyData"
import { useState } from 'react'

export default function Post({post}) {
    const [like, setlike] = useState(post.like)
    const [islike, setislike] = useState(false);
    const likehandler =()=>{
        setlike(islike? like - 1 : like + 1)
        setislike(!islike)
    }
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopleft">
                        <img className="postprofileImg" src={Users.filter(u=>u.id === post.userId)[0].profilePicture} alt="" />
                        <span className="postUsername">{Users.filter(u=>u.id === post.userId)[0].username}</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImage" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="PostBottomLeft">
                        <ThumbUpAlt htmlColor="blue" className="postIcon" onClick={likehandler}/>
                        <Favorite htmlColor="red" className="postIcon" onClick={likehandler}/>
                        <span className="likeCounter">{like} people liked</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommenttext">{post.Comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
