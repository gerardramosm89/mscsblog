import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchImages } from '../actions/index';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
  }

  previewFiles(e) {
    e.preventDefault();
  }

  consoleLog(e){
    e.preventDefault();
  }
  logFiles(e) {
    e.preventDefault();
    [].forEach.call(this.files.files, this.readAndPreview);
  }

  uploadFiles(e) {
    e.preventDefault();
    for (let i = 0; i < this.files.files.length; i++) {
      this.uploadFile(this.files.files[i]);
    }
    this.props.fetchImages();
    var preview = document.querySelector('#preview');
    preview.innerHTML = '';    
  }

  readAndPreview(file) {
    let reader = new FileReader();
    reader.addEventListener('load', function() {
        var image = new Image();
        image.height = 200;
        image.title = file.name;
        image.src = this.result;
        image.class = 'col-xs-3';
        var preview = document.querySelector('#preview');
        image.className += 'col-xs-6';
        preview.appendChild(image);
      }, false);
      reader.readAsDataURL(file);
  }

  uploadFile(file){
      var url = "http://mlhq.io/api/upload";
      var xhr = new XMLHttpRequest();
      var fd = new FormData();
      xhr.open("POST", url, true);
      xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
              // Every thing ok, file uploaded
              // console.log(xhr.responseText); // handle response.
          }
      };
      fd.append('uploaded_file', file);
      xhr.send(fd);
  }

  render() {
    return (
      <div>
        <form onChange={this.previewFiles.bind(this)}>
          <input
          onChange={this.logFiles.bind(this)}
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
        <button
        className='btn btn-primary'
        onClick={this.uploadFiles.bind(this)}
        >Upload!</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.images.images
  };
}
export default connect(mapStateToProps, { fetchImages })(ImageUpload);