import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
const myKey = '8PrzOIH^y8';
const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class Interests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsColor: [...originalColors],
      fullpages: [
        {
          text:{
            title:"I like playing badminton, basketball, and jogging.",
            line1:"Used to be a huge fan of NBA.",
            line2:"My favorite athlete is Dwyane Wade -- my legendary 3.",
            line3:"Found its hard to find a proper badminton court after graduated from the University"
          },
          background:"https://thumbs.gfycat.com/AcademicNarrowAntlion-size_restricted.gif"
        },
        {
          text:{
            title:"I watch movie when I feel tired on work and sport.",
            line1:"Hollywood, Bollywood, animation movies.. I like them all.",
            line2:"Top 3 movies on my personal list are: ",
            line3:"The Dark Knight, Infernal Affairs, Paprika"
          },
          background:"https://thumbs.gfycat.com/FrigidPessimisticAnemonecrab-size_restricted.gif"
        },
        {
          text:{
            title:"I am good at playing violin.",
            line1:"PTE 80+ and certificated NAATI interpreter.",
            line2:"Contact me if you need causal coaching on violin or PTE.",
          },
          background:"https://thumbs.gfycat.com/TalkativeCheapAlpinegoat-size_restricted.gif"
        },
        {
          text:{
            title:"I like taking photos of sceneries.",
            line1:"The background photo in the home page is my work.",
            line2:"Check gallery section to see my photo gallery and video play list.",
          },
          background:"https://thumbs.gfycat.com/IckyWeightyEasteuropeanshepherd-size_restricted.gif"
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
          // sectionsColor={this.state.sectionsColor}
          licenseKey = {myKey}
          render={comp =>
            console.log("render prop change") || (
              <ReactFullpage.Wrapper>
                {fullpages.map(({ text, background }) => (
                  <div key={text.title} className="section" id={`${text.title}`}>
                    <img src={background} alt='Ray-yuan Background'></img>
                    <h1 className='myT'>{text.title}</h1>
                {text.line1 && <h1 className='myT'>{text.line1}</h1> }
                {text.line2 && <h1 className='myT'>{text.line2}</h1> }
                {text.line3 && <h1 className='myT'>{text.line3}</h1> }
                  </div>
                ))}
              </ReactFullpage.Wrapper>
            )
          }
        />
        <Footer />
      </div>
    );
  }
}

export default Interests