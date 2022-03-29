import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { CREATE_COMMENT_SUCCESS } from '../../redux/actions/actionTypes'
import { addComment, getCommentsOfVideoById } from '../../redux/actions/commentAction'
import Comment from './comment/Comment'
import './_comments.scss'
const Comments = ({ videoId, totalComments }) => {
    const dispatch = useDispatch()
    const history = useHistory();

    useEffect(() => {
        dispatch(getCommentsOfVideoById(videoId))
    }, [videoId, dispatch])

    const comments = useSelector(state => state.CommentReducer.comments)
    const { accessToken } = useSelector(state => state.authReducer)

    const [text, setText] = useState('')

    const handleComment = e => {
        e.preventDefault()
        
        if (text.length > 2) {
            dispatch(addComment(videoId, text))
        }
        setText('')
    }
    const handleAuth = () => {
        
    }
    return (

        <div className='comments'>
            <p>{totalComments} Comments</p>
            <div className='my-2 comments__form d-flex w-100'>
                {/* <img
                    src={photoURL}
                    alt=''
                    className='mr-3 rounded-circle'
                /> */}
                <form onSubmit={accessToken ? handleComment : history.push("/youtube-clone/auth")} className='d-flex flex-grow-1'>
                    <input
                        type='text'
                        className='flex-grow-1'
                        placeholder='Write a comment...'
                        value={text}
                        onChange={e => setText(e.target.value)}
                    />
                    <button className='p-2 border-0'>Comment</button>
                </form>
            </div>
            <div className='comments__list'>
                {comments?.map((comment, index) => (
                    <Comment comment={comment} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Comments