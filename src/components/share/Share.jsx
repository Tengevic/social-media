import './share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="shareTop">
                <img className="shareProfileImage" src="/assets/images/3.jpeg" alt="" />
                    <input placeholder ="what's on your mind?" className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareOptionIcon"/>
                            <span className="shareOptionsText">Photo or videos</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareOptionIcon"/>
                            <span className="shareOptionsText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareOptionIcon"/>
                            <span className="shareOptionsText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="yellow" className="shareOptionIcon"/>
                            <span className="shareOptionsText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
        
            </div>
        </div>
    )
}
