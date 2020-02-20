import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
const myKey = '';
class Interests extends Component{
    render(){
        return(
            <ReactFullpage
            scrollOverflow={true}
            sectionsColor={["orange", "purple", "green"]}
            licenseKey = {myKey}
            render={({ state, fullpageApi }) => {
              return (
                <div id="fullpage-wrapper">
                  <div className="MyT">
                    <h3>Section 1</h3>
                  </div>
                  <div className="MyH2">
                    <div className="slide">
                      <h3>Slide 2.1</h3>
                    </div>
                    <div className="slide">
                      <h3>Slide 2.2</h3>
                    </div>
                    <div className="slide">
                      <h3>Slide 2.3</h3>
                    </div>
                  </div>
                  <div className="MyH2">
                    <h3>Section 3</h3>
                    <button onClick={() => fullpageApi.moveTo(1, 0)}>
                      Move top
                    </button>
                  </div>
                </div>
              );
            }}
          />
        )
        
    }
}
export default Interests