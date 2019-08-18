import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Login from './Login'
import SignOut from './SignOut'

class NavBar extends React.Component {
  render() {
    const { userSession } = this.props

    return(
      <>
      { 
        userSession.isUserSignedIn() ?
        <Menu floated='right' fluid='true'>
          <Menu.Item  position='right'>
            Posts
          </Menu.Item>
          <Menu.Item>
            My Profile
          </Menu.Item>
          <Menu.Item>
            <SignOut userSession={userSession}/>
          </Menu.Item>
        </Menu>
        :
        <Menu>
          <Menu.Item position='left'>
            <Button primary onClick={() => window.open('https://browser.blockstack.org/sign-up', '_blank')}>Sign up</Button>
          </Menu.Item>
          <Menu.Item position='right'>
            <Login userSession={userSession}/>
          </Menu.Item>
        </Menu>
      }
      </>
    )
  }
}

export default NavBar