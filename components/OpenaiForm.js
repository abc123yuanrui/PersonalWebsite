import React from 'react';
import Loading from './Loading';
const CartoonizeApi ='https://api.openai.com/v1/images/generations';
const settings = {
  max_width: 1000,
  max_height: 1000,
  imgSizeMax: 1400000
}
const toBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
export default class Uploader extends React.Component {
    constructor(props) {
      super(props);
      this.state = { isLoading: false, url: null, ProcessedImgSrc: null };
      this.onChange = this.onChange.bind(this);
      this.resetFile = this.resetFile.bind(this);
    }

    async upLoad(fd) {
      const requestOptions = {
        method: 'POST',
        // mode: 'no-cors',
        body: fd,
        };
      // try{const response = await fetch(CartoonizeApi, requestOptions);
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
      // }catch (error) {
      //   console.log(error);
      // }
      const response = await fetch(CartoonizeApi, requestOptions);
      const imageBlob = await response.blob();
      const ImgSrc = await webkitURL.createObjectURL(imageBlob);
      // To base 64 (bad practice)
      // const fileReaderInstance = new FileReader();
      // fileReaderInstance.readAsDataURL(imageBlob);
      // fileReaderInstance.onload = () => {
      //   const base64data = fileReaderInstance.result;   
      //   this.setState({
      //     processed:base64data
      //   });
      // }
      this.setState({
        isLoading: false,
        ProcessedImgSrc: ImgSrc
      });
    };
  
    async onChange(event) {
      this.setState({
        isLoading:true
      })
      const file = event.target.files[0];
      console.log(file, typeof(file));
      const fd = new FormData();
      const url = await toBase64(file).then(data => data);
      this.setState({url:url
      });
      if(file.size>settings.imgSizeMax){
        // image file object to canvas
        var canvasIn = new Image;
        var imgInurl = url;
        canvasIn.src = imgInurl ;
        canvasIn.onload =()=> {
        }
        // wait for width and height
        await canvasIn.onload();
        var canvasOut = document.createElement("canvas");
        var canvasContext = canvasOut.getContext("2d");
        let ratio =1;
        canvasOut.width = canvasIn.width;
        canvasOut.height = canvasIn.height;
        if(canvasOut.width > settings.max_width){
          ratio = settings.max_width / canvasIn.width;
          canvasOut.width = settings.max_width;
          canvasOut.height = canvasOut.height * ratio;
        }
        if(canvasOut.height > settings.max_height){       
          ratio = settings.max_height / canvasOut.height;
          canvasOut.height = settings.max_height;
          canvasOut.width = canvasOut.width * ratio;
        }

        canvasContext.drawImage(canvasIn, 0, 0, canvasOut.width, canvasOut.height);
        const dataURL = canvasOut.toDataURL("image/png", 1);
        async function urltoFile(url, filename, mimeType){
          return (fetch(url)
              .then(function(res){return res.arrayBuffer();})
              .then(function(buf){return new File([buf], filename,{type:mimeType});})
          );
        }
        const newFile = await urltoFile(dataURL, 'resizedImage.png','image/PNG');
        fd.append("myImage", newFile);
      }else{
        fd.append("myImage", file);
      }
     this.upLoad(fd);
     this.setState({url:url});
    }
    
    resetFile(event) {
      event.preventDefault();
      this.setState({ fileSize: 0, url: null });
    }
    render() {
      return (
        <div>{this.state.isLoading?  <Loading />:
        <div>
          <iframe width="0" height="0" border="0" name="dummyframe" id="dummyframe"></iframe>

          <form>
          {/* <input
            type="file"
            onChange={this.onChange}
            accept="image/png,image/jpeg,image/gif"
            className = "serviceButton"
            name="myImage"
          /> */}
          <textarea className="serviceP" cols="20" rows="3">This is the default test</textarea>
          <button type="submit">Generate picture</button>
          </form>
          {/* {this.state.fileSize !== 0 && <span>{this.state.fileSize}mb</span>}
          {this.state.url && (
            <div style={{ textAlign: "center" }}>
              <button onClick={this.resetFile}>Remove File 🐛gy!</button>
            </div>
          )} */}
          {this.state.url && (
              <div className='serviceContainer'>
            <img className='serviceImg' src={this.state.url} alt="🤫" />
            {this.state.ProcessedImgSrc && (<img className='serviceImg' src={this.state.ProcessedImgSrc} alt="🤫" />)}
            </div>
          )}
        </div>}
        </div>
      );
    }
  }
  