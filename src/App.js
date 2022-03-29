import React, { useState, useEffect } from 'react'
import Header from './components/header/Header'
import HomeScreen from './components/screens/homescreen/HomeScreen'
import Sidebar from './components/sidebar/Sidebar'
import { Container } from 'react-bootstrap'
import './_app.scss'
import LoginScreen from './components/screens/loginscreen/LoginScreen'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import 'react-lazy-load-image-component/src/effects/blur.css';
import WatchScreen from './components/screens/watchscreen/WatchScreen'
import SearchScreen from './components/screens/searchScreen/SearchScreen'
import SubscriptionScreen from './components/screens/subscriptionScreen/SubscriptionScreen'
import ChannelScreen from './components/screens/channelScreen/ChannelScreen'

const Layout = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false)

  const handleToggleSidebar = (a) => {
    setSidebarToggle(!sidebarToggle)
  }
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app__container">
        <Sidebar handleToggleSidebar={handleToggleSidebar} sidebarToggle={sidebarToggle} />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  )
}

const App = () => {
  const { accessToken, loading } = useSelector(state => state.authReducer)
  const history = useHistory();

  // useEffect(() => {
  //   if (!accessToken && !loading) {
  //     history.push("/auth")
  //   }
  // }, [accessToken, loading, history])
  return (
    <>

      <Switch>
        <Route exact path="/youtube-clone/">
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route exact path="/youtube-clone/auth">
          <LoginScreen />
        </Route>
        <Route exact path="/youtube-clone/search/:query">
          <Layout>
            <SearchScreen/>
          </Layout>
        </Route>
        <Route exact path="/youtube-clone/watch/:id">
          <Layout>
            <WatchScreen />
          </Layout>
        </Route>
        <Route exact path="/youtube-clone/feed/:subscription">
          <Layout>
            <SubscriptionScreen/>
          </Layout>
        </Route>
        <Route exact path="/youtube-clone/channel/:channelId">
          <Layout>
            <ChannelScreen/>
          </Layout>
        </Route>
        <Route>
          <Redirect to="/youtube-clone/" />
        </Route>
      </Switch>

    </>
  )
}

export default App