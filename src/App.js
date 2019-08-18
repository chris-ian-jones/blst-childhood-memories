import React from 'react';
import './App.css';
import { appConfig } from './utils/constants'
import { UserSession } from 'blockstack'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

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

  handleSignIn = () => {
    const { userSession } = this.state
    userSession.redirectToSignIn()
  }

  handleSignOut = () => {
    const { userSession } = this.state
    userSession.signUserOut()
    window.location = '/'
  }

  render() {
    const { userSession } = this.state
    console.log('<App /> userSession: ', this.state.userSession)
    return (
      <div className="App">
      { 
        userSession.isUserSignedIn() ?
        <Button onClick={this.handleSignOut}>
          Sign Out
        </Button>
        :
        <Button onClick={this.handleSignIn}>
          Login
        </Button>
      }
      </div>
    )
  }
}

export default App;
