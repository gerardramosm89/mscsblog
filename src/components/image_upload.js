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
    console.log('this.files is: ', this.files);
    console.log('this.files.files is: ', this.files.files);
    [].forEach.call(this.files.files, this.readAndPreview);
  }

  uploadFiles(e) {
    e.preventDefault();
    for (let i = 0; i < this.files.files.length; i++) {
      this.uploadFile(this.files.files[i]);
    }
  }

  readAndPreview(file) {
    let reader = new FileReader();
    reader.addEventListener('load', function() {
        var image = new Image();
        image.height = 300;
        image.title = file.name;
        image.src = this.result;
        image.class = 'col-xs-3';
        var preview = document.querySelector('#preview');
        preview.appendChild(image);
      }, false);
      reader.readAsDataURL(file);
  }

  uploadFile(file){
      var url = "http://localhost:8081/api/upload";
      var xhr = new XMLHttpRequest();
      var fd = new FormData();
      xhr.open("POST", url, true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              // Every thing ok, file uploaded
              console.log(xhr.responseText); // handle response.
          }
      };
      fd.append('uploaded_file', file);
      console.log('fd is: ', fd);
      xhr.send(fd);
  }

  render() {
    console.log('this.preview is: ', this.preview);
    return (
      <div>
        <form onChange={this.previewFiles.bind(this)}>
          <input 
          ref={(files => { this.files = files })}
          id="browse" 
          type="file"
          multiple />
        </form>

        <section className="row">
          <div id="preview"
          ref={(preview) => {this.preview = preview}}
          ></div>
        </section>

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