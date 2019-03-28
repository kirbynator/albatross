import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Dropdown,} from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';


class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    const avatar = {
      width: '35px',
      heigth: '35px',
      fontSize: '15px',
      textAlign: 'center',
      borderRadius: '50%',
      marginTop: '3px',
      marginRight: '3px',
      marginBottom: '0px',
      
  };

    if (user) {
      return (
        <Menu.Menu position='right'>
            <Dropdown icon={<img alt='avatar' style={avatar} src='https://react.semantic-ui.com/images/wireframe/square-image.png'/>}>
    <Dropdown.Menu>
      <Dropdown.Item text='Profile' />
      <Dropdown.Item text='Settings'/>
      <Dropdown.Divider />
      <Dropdown.Item text='Logout' onClick={ () => handleLogout()} />
    </Dropdown.Menu>
  </Dropdown>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Menu inverted color='red' pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);