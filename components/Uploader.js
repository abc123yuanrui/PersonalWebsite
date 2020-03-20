import React from 'react';
import Loading from './Loading';
const CartoonizeApi ='https://cryptic-savannah-08092.herokuapp.com/ImgProcess';
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
  
    async onChange(event) {
      this.setState({
        isLoading:true
      })
      const file = event.target.files[0];
      // const fileSize = (file.size / 1024 / 1024).toFixed(4);
      // console.log(file, fileSize);
      const fd = new FormData();
      fd.append("myImage", file);
      const requestOptions = {
        method: 'POST',
        // mode: 'no-cors',
        body: fd,
        };
      
      const url = await toBase64(file).then(data => data);
      // try{const response = await fetch(CartoonizeApi, requestOptions);
      //   if (!response.ok) {
      //     throw Error(response.statusText);
      //   }
      // }catch (error) {
      //   console.log(error);
      // }
      const response = await fetch(CartoonizeApi, requestOptions);
      const imageBlob = await response.blob();
      console.log('The gathered response body:', imageBlob);
      const ImgSrc = await webkitURL.createObjectURL(imageBlob);
      console.log('the gathered url:', ImgSrc);
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
        url: url,
        ProcessedImgSrc: ImgSrc
      });
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
          <input
            type="file"
            onChange={this.onChange}
            accept="image/png,image/jpeg,image/gif"
            className = "serviceButton"
            name="myImage"
          />
          </form>
          {/* {this.state.fileSize !== 0 && <span>{this.state.fileSize}mb</span>}
          {this.state.url && (
            <div style={{ textAlign: "center" }}>
              <button onClick={this.resetFile}>Remove File 🐛gy!</button>
            </div>
          )} */}
          {this.state.url && (
              <div>
            <img className='serviceImg' src={this.state.url} alt="🤫" />
            {this.state.ProcessedImgSrc && (<img className='serviceImg' src={this.state.ProcessedImgSrc} alt="🤫" />)}
            </div>
          )}
        </div>}
        </div>
      );
    }
  }
  