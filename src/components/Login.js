import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

 class Login extends React.Component {
   state = {
     loading: false
   }

  handleSignIn = (event) => {
    const { userSession } = this.props
    event.preventDefault()
    userSession.redirectToSignIn()
    this.setState({
      loading: true
    })
  }

  render() {
    const { loading } = this.state

    return(
      <div>
        {
          loading ? 
          <p>Loading...</p> 
          :
          <Button onClick={this.handleSignIn}>
            Login with Blockstack
          </Button>
        }
      </div>
    )
  }
 }

 export default Login