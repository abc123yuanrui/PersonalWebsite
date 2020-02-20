import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
import Head from 'next/head'
const myKey = '8PrzOIH^y8';
// class Interests extends Component{
//     render(){
//         return(
//             <ReactFullpage
//             scrollOverflow={true}
//             sectionsColor={["orange", "purple", "green"]}
//             licenseKey = {myKey}
//             render={({ state, fullpageApi }) => {
//               return (
//                 <ReactFullpage.Wrapper>
//                 <div className="section">
//                   <p>Section 1 (welcome to fullpage.js)</p>
//                   <button onClick={() => fullpageApi.moveSectionDown()}>
//                     Click me to move down
//                   </button>
//                 </div>
//                 <div className="section">
//                   <p>Section 2</p>
//                 </div>
//               </ReactFullpage.Wrapper>
//               );
//             }}
//           />
//         )
        
//     }
// }
const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text: "Sports-waiting to be uploaded"
        },
        {
          text: "Techs-waiting to be uploaded"
        },
        {
          text: "Music-waiting to be uploaded",
        }
      ]
    };
  }

  onLeave(origin, destination, direction) {
    console.log("onLeave", { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  }

  handleChangeColors() {
    const newColors =
      this.state.sectionsColor[0] === "yellow"
        ? [...originalColors]
        : ["yellow", "blue", "white"];
    this.setState({
      sectionsColor: newColors
    });
  }

  handleAddSection() {
    this.setState(state => {
      const { fullpages } = state;
      const { length } = fullpages;
      fullpages.push({
        text: `section ${length + 1}`,
        id: Math.random()
      });

      return {
        fullpages: [...fullpages]
      };
    });
  }

  handleRemoveSection() {
    this.setState(state => {
      const { fullpages } = state;
      const newPages = [...fullpages];
      newPages.pop();

      return { fullpages: newPages };
    });
  }

  moveSectionDown(){
    fullpage_api.moveSectionDown();
  }

  render() {
    const { fullpages } = this.state;

    if (!fullpages.length) {
      return null;
    }

    const Menu = () => (
      <div
        className="menu"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100
        }}
      >
        <ul className="actions">
          <li>
            <button onClick={() => this.handleAddSection()}>Add Section</button>
            <button onClick={() => this.handleRemoveSection()}>
              Remove Section
            </button>
            <button onClick={() => this.handleChangeColors()}>
              Change background colors
            </button>
            <button onClick={() => this.moveSectionDown()}>
              Move Section Down
            </button>
          </li>
        </ul>
      </div>
    );

    return (

      <div className="App">
        {/* <Menu /> */}
        <Navbar />
        <ReactFullpage
          navigation
          onLeave={this.onLeave.bind(this)}
          sectionsColor={this.state.sectionsColor}
          licenseKey = {myKey}
          render={comp =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text }) => (
                  <div key={text} className="section">
                    <h1>{text}</h1>
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }
        />
      </div>
    );
  }
}

export default Interests