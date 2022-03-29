import React from 'react'
import './_header.scss';

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getVideosBySearch } from '../../redux/actions/videosAction';

const Header = ({ handleToggleSidebar }) => {
    const { user,accessToken } = useSelector(state => state.authReducer)
    const [input, setinput] = useState("")
    const history = useHistory()
    const { query } = useParams()


    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`/youtube-clone/search/${input}`)
    }

    return (
        <>
            <div className="header">
                <FaBars className="header__menu" size={26} onClick={handleToggleSidebar} />
                <NavLink exact to="/youtube-clone/">
                    <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-picture-13.png" alt="Youtube Logo" className="header__logo" />
                </NavLink>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Search" value={input} onChange={(e) => setinput(e.target.value)} />
                    <button type="submit">
                        <AiOutlineSearch size={22} />
                    </button>

                </form>
                <div className="header__icons">
                    <MdNotifications size={28} />
                    <MdApps size={28} />
                    {
                        accessToken ? 
                        <img src={user?.photoURL} alt="avatar" />
                        :
                        <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="Avatar" />
                    }
                </div>
            </div>
        </>
    )
}

export default Header
