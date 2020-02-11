import { withRouter } from 'next/router';
import dynamic from 'next/dynamic'
import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import {Button, Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
const thisUrl = `https://www.youtube.com/watch?v=oUFJJNQGwhk`;
const localUrl = '/videos/test.mp4'
const navigation = dynamic(() => import('../src/components/navigation'))
class HomePage extends Component {

    render(){
        return <div >
            <div className = 'navbar'>
            <Navbar bg='dark' expand='lg' >
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse className = 'navTab'>
                <Nav>
                <Nav.Link　href='/' className = 'tab'>Home</Nav.Link>
                    <Nav.Link href='/family'className = 'tab'>Family</Nav.Link>
                 </Nav>
            </Navbar.Collapse>
            </Navbar>
            </div>
            <p>Welcome to Next.js!</p>
            <Button>CHeck</Button>
            <ReactPlayer url= {localUrl} playing= {true}  controls= {true}/>
            <style jsx>{`
      .navbar {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }
      .tab {
        display: block;
        color: white;
        font-size: 14px;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      .navTab {
          color:white
      }
    `}</style>
            </div>
    }
  }
  
  export default HomePage