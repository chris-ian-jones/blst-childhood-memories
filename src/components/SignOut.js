import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

 class SignOut extends React.Component {
  state = {
    loading: false
  }

  handleSignOut = (event) => {
    const { userSession } = this.props
    event.preventDefault()
    userSession.signUserOut()
    this.setState({
      loading: true
    })
    window.location = '/'
  }

  render() {
    const { loading } = this.state

    return(
      <div>
        {
          loading ? 
          <p>Signing out...</p> 
          :
          <Button onClick={this.handleSignOut}>
            Sign Out
          </Button>
        }
      </div>
    )
  }
 }

 export default SignOut