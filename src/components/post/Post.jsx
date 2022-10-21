import './post.css'
import {MoreVert} from '@material-ui/icons';
import {User} from '../../dummydata'
import { useState } from 'react';

export default function Post({post}) {
const [like,setLike] =useState(post.like)
const [isliked,setIsLiked] =useState(false)


const likehandler=()=>{
    setLike(isliked ? like-1 : like+1);
    setIsLiked(!isliked)
}
//   const p =  User.filter((u)=>{
//      return   u.id===post.userId
//     })

//     console.log(p[0].username);
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src= {User.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" />
                    <span className="postUserName">
                        {User.filter((u)=>u.id===post.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img className='postImg' src={post.photo} alt="" />
            </div>
            
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img className='likeIcon' src="assets/like.png" onClick={likehandler} alt="" />
                    <img className='likeIcon' src="assets/heart.png" onClick={likehandler} alt="" />
                    <span className="likeCounter">{like}</span>
                </div>
                <div className="postBottomRight">
                    <div className="postCommentText">{post.comment} comments</div>
                </div>
            </div>
        </div>
    </div>
  )
}
