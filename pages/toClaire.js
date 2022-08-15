import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReactFullpage from '@fullpage/react-fullpage';
const myKey = '8PrzOIH^y8';
const originalColors = ['#ff5f45', '#0798ec', '#fc6c7c', '#435b71', 'orange', 'blue', 'purple', 'yellow'];

class Hidden extends Component {
    constructor(props) {
      super(props);
      this.state = {
        sectionsColor: [...originalColors],
        fullpages: [
          {
            text:{
              title:"To my fist love, and last,",
              line1:"你说收到过最感到的礼物是写给你的表白散文，",
              line2:"又说想“完美对象”给你写点文字。",
              line3:"其实我哪里完美，只是你喜欢我的全部，不在意我路痴，说话直。",
              line4:"所以啊，果儿，下面是熊给你的，流水账和散文诗。"
            },
            background:"/photos/hidden_bg_01.png"
          },
          {
            text:{
              line1:"我不会作诗，但我记得每件想和你一起做的事：",
              line2:"去悉尼，墨尔本和我留有遗憾的黄金海岸，",
              line3:"和你玩黄金矿工，飞飞机，一起做饭，",
              line4:"带我逛商场，打保龄球，一起看灯光秀，",
              line5:"还有最重要的，回国去各种地方玩。",
              line6:"你说人生很短，要做先想自己的果，",
              line7:"但我为你好的时候，你也都在优先考虑我。",
            },
            background:"/photos/hidden_bg_02.png"
          },
          {
            text:{
              line1:"我们的清单很长，人生很短，",
              line2:"现在，我终于可以拍拍你的头，牵牵你的手，",
              line3:"一路一起走，协互助光环，把清单划完。",
              line4:"曾经，坐过的台阶上是斑驳树影，聊天的车窗外有满天繁星,",
              line5:"以后，要一起去看阳朔的湖面如镜，",
              line6:"和哈尔滨夜幕下的冰。",
              line7:"然后问你还需不需要；捐精XD",
            },
            background:"/photos/hidden_bg_03.png"
          },
          {
            text:{
              title:"未尝相思不言爱，未曾等待不谈情。",
              line1:"幸而我们的感情可以换来开花结果，",
              line2:"而不是怅惘曾经。",
              line3:"希望我在你身边会让你开心轻松，辉光日新。",
              line4:"如果你也想贴贴我，就再给我一杯芝芝莓莓，换我一杯西柚加冰。",
              line5:"Yours,",
              line6:"只给你变魔术的熊",
            },
            background:"/photos/hidden_bg_04.png"
          },
          {
            text:{
              title:"写在最后",
              line1:"当你说彼此冷静，我想把上面写的全部的话，改的不要让我那么尴尬，却最终没有动。可能我想，在另一个平行时空，能把它在最好的时刻发送。",
              line2:"你的试探和吻可能是一时冲动，却不知道我把它看的有多重。如果我也有一个树洞，我想大声倾诉你对我的好，给我的痛。",
              line3:"又或许，只想侧耳倾听你的声音，傻傻期待我们的树洞相通。",
              line4:"你说，我不懂，爱很沉重。先说喜欢的是你，要分手的是你，想单身的是你，不分手的是你，做朋友的是你，现在的我，被你淹没在这无法承受之重。"
            },
            background:"/photos/hidden_bg_05.png"
          },

          {
            text:{
              line1:"但我知道，这就是你，我说喜欢全部的你。所以即使这样，我也想你没有压力，事事顺心。",
              line2:"对越来越好的你，希望拥有你最好年华的他能一直珍惜，鼓励。",
              line3:"你想顺其自然，不想要复杂的关系。",
              line4:"我真的很痛，很气，感觉自己被你玩弄，却甘之如饴。",
              line5:"只要做出这个选择的，是你，",
              line6:"因为我不想看互助光环，变成互相摧残。",
              line7:"自你想要的，不上头了的朋友，袁睿。",
            },
            background:"/photos/hidden_bg_05.png"
          }
        ]
      };
    }
  
    onLeave(origin, destination, direction) {
      console.log("onLeave", { origin, destination, direction });
      // arguments are mapped in order of fullpage.js callback arguments do something
      // with the event
    }
  
    render() {
      const { fullpages } = this.state;
  
      if (!fullpages.length) {
        return null;
      }
  
      // const Menu = () => (
      //   <div
      //     className="menu"
      //     style={{
      //       position: "fixed",
      //       top: 0,
      //       zIndex: 100
      //     }}
      //   >
      //     <ul className="actions">
      //       <li>
      //         <button onClick={() => this.handleAddSection()}>Add Section</button>
      //         <button onClick={() => this.handleRemoveSection()}>
      //           Remove Section
      //         </button>
      //         <button onClick={() => this.handleChangeColors()}>
      //           Change background colors
      //         </button>
      //         <button onClick={() => this.moveSectionDown()}>
      //           Move Section Down
      //         </button>
      //       </li>
      //     </ul>
      //   </div>
      // );
  
      return (
  
        <div className="App">
          {/* <Menu /> */}
          {/* <Navbar /> */}
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
                      <img src={background} alt='Ray-yuan Background' className="hiddenImg" ></img>
                      <h1 className='myHiddenT'>{text.title}</h1>
                  {text.line1 && <h1 className='myHiddenP'>{text.line1}</h1> }
                  {text.line2 && <h1 className='myHiddenP'>{text.line2}</h1> }
                  {text.line3 && <h1 className='myHiddenP'>{text.line3}</h1> }
                  {text.line4 && <h1 className='myHiddenP'>{text.line4}</h1> }
                  {text.line5 && <h1 className='myHiddenP'>{text.line5}</h1> }
                  {text.line6 && <h1 className='myHiddenP'>{text.line6}</h1> }
                  {text.line7 && <h1 className='myHiddenP'>{text.line7}</h1> }
                  {text.line8 && <h1 className='myHiddenP'>{text.line8}</h1> }
                  {text.link && <a className='myHiddenP' href={text.link} >{text.linkName}</a> }
                    </div>
                  ))}
                </ReactFullpage.Wrapper>
              )
            }
          />
          {/* <Footer /> */}
        </div>
      );
    }
  }
  
  export default Hidden