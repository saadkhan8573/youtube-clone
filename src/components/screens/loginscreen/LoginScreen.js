import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../../redux/actions/auth.actions'
import './_loginscreen.scss'

const LoginScreen = () => {
    const accessToken = useSelector(state => state.authReducer.accessToken)
    const dispatch = useDispatch()
    const history = useHistory()
    useEffect(() => {
        accessToken && history.push("/youtube-clone/")
    }, [accessToken])

    const handleLogin = () => {
        dispatch(login())
    }
    return (
        <>
            <div className="login">
                <div className="login__container">
                    <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/youtube-logo-png-picture-13.png" alt="Logo" />
                    <button onClick={handleLogin}>Login with Google</button>
                    <p>This Project is made using Youtube Data Api</p>
                </div>
            </div>
        </>
    )
}

export default LoginScreen
