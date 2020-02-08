import { withRouter } from 'next/router';
import React, { Component } from 'react';
import ReactPlayer from 'react-player';

// const input = testVideo.querySelector('[type=file]')
const thisUrl = `https://www.youtube.com/watch?v=oUFJJNQGwhk`;
const localUrl = '/videos/test.mp4'

class HomePage extends Component {

    render(){
        return <div>
            <p>Welcome to Next.js!</p>
            <ReactPlayer url= {localUrl} playing= {true}  controls= {true}/>
            </div>
    }
  }
  
  export default HomePage