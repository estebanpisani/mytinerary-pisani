import { useDispatch, useSelector } from 'react-redux';

import '../styles/Comments.css'

const Comments = ({ comments }) => {
    return (
        <div className="comments-container">
            <ul id="comments-list" className="comments-list">
                {comments.map((comment, i) => (
                    <li key={i}>
                        <div className="comment-main-level">
                            <div className="comment-avatar">
                                {comment.user.userPhoto &&
                                    <img src={comment.user.userPhoto} alt="" />
                                }
                            </div>
                            <div className="comment-box">
                                <div className="comment-head">
                                    <h6 className="comment-name">{comment.user.firstName} {comment.user.lastName}</h6>
                                </div>
                                <div className="comment-content">
                                    {comment.comment}
                                </div>
                            </div>
                        </div>
                    </li>)
                )}
            </ul>
        </div>
    )



}


export default Comments;