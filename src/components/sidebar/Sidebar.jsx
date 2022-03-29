import React from 'react'
import './_sidebar.scss';
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome,
    MdSentimentDissatisfied
} from 'react-icons/md'
import { log_out } from '../../redux/actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink,useHistory } from 'react-router-dom';

const Sidebar = ({ sidebarToggle, handleToggleSidebar }) => {
    const dispatch = useDispatch()
    const { accessToken } = useSelector(state => state.authReducer)
    const history = useHistory();
    const handleAuth = () => {
        accessToken ? 
        dispatch(log_out())
        :
        history.push("/youtube-clone/auth")
    }
    return (
        <>
            <nav className={sidebarToggle ? "sidebar open" : "sidebar"} onClick={handleToggleSidebar}>
                <li>
                    <MdHome size={23} />
                    <span>Home</span>
                </li>
                <NavLink exact to={accessToken ? "/youtube-clone/feed/subscription" : "/youtube-clone/auth"}>
                    <li>
                        <MdSubscriptions size={23} />
                        <span>Subscriptions</span>
                    </li>
                </NavLink>
                <NavLink exact to={accessToken ? "/youtube-clone/feed/liked" : "/youtube-clone/auth"}>
                    <li>
                        <MdThumbUp size={23} />
                        <span>Liked Videos</span>
                    </li>
                </NavLink>
                <li>
                    <MdHistory size={23} />
                    <span>History</span>
                </li>
                <li>
                    <MdLibraryBooks size={23} />
                    <span>Library</span>
                </li>
                <li>
                    <MdSentimentDissatisfied size={23} />
                    <span>I don't know</span>
                </li>
                <hr />
                <li onClick={handleAuth}>
                    <MdExitToApp size={23} />
                    <span> {accessToken ? "Log out" : "Sign In"} </span>
                </li>
                <hr />

            </nav>
        </>
    )
}

export default Sidebar