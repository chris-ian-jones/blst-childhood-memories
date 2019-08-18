import React from 'react';
import './App.css';
import { appConfig } from './utils/constants'
import { UserSession } from 'blockstack'

// import Login from './components/Login'
// import SignOut from './components/SignOut'
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    userSession: new UserSession({ appConfig })
  }

  componentDidMount = async() => {
    const { userSession } = this.state

    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn()

      if (!userData.username) {
        throw new Error('This app requires a username')
      }

      window.location = '/'
    }
  }

  render() {
    const { userSession } = this.state
    console.log('<App /> userSession: ', this.state.userSession)
    return (
      <div className="App">
        <NavBar userSession={userSession} />
      {/* { 
        userSession.isUserSignedIn() ?
        <SignOut userSession={userSession}/>
        :
        <Login userSession={userSession}/>
      } */}
      </div>
    )
  }
}

export default App;
