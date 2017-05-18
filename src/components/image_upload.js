import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("You are logged in! there is a token!");
    }
  }

  previewFiles(e) {
    e.preventDefault();
  }

  consoleLog(e){
    e.preventDefault();
    console.log(this.preview);
  }
  logFiles(e) {
    e.preventDefault();
    console.log(this.files);
    console.log(this.files.files);
    [].forEach.call(this.files.files, this.readAndPreview);
  }

  uploadFiles(e) {
    e.preventDefault();
    console.log('this.files.files is: ');
    console.log(this.files.files);
    axios.post('http://localhost:8081/upload', this.files.files);
  }

  readAndPreview(file) {
    let reader = new FileReader();
    reader.addEventListener('load', function() {
        var image = new Image();
        image.height = 100;
        image.title = file.name;
        image.src = this.result;
        console.log(this.result);
        console.log('image is: ', image);
        console.log(this.preview);
        var preview = document.querySelector('#preview');
        preview.appendChild(image);
      }, false);
      reader.readAsDataURL(file);
  }

  render() {
    console.log('this.preview is: ', this.preview);
    return (
      <div>
        <input 
        ref={(files => { this.files = files })}
        id="browse" 
        type="file" 
        onChange={this.previewFiles.bind(this)} 
        multiple />
        <div id="preview" 
        ref={(preview) => {this.preview = preview}}
        ></div>
        <button onClick={this.consoleLog.bind(this)}>console log preview</button>
        <button
        onClick={this.logFiles.bind(this)}
        >Console Log Files</button>
        <button
        onClick={this.uploadFiles.bind(this)}
        >Submit Files to API</button>
      </div>
    );
  }
}

export default ImageUpload;