import React, { Component } from 'react';
import axios from 'axios';

class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log("Upload attempted");
    console.log(this.state.file);
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    console.log(e.target.files);
    // let file = e.target.files[0];
    let file = e.target.files;
    
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      }, () => {
        console.log(this.state.file);
        for (let i = 0; i<this.state.file.length; i++) {
          console.log(this.state.file[i]);
          console.log(this.state.imagePreviewUrl);
        }
      });
    }
    // for (let i = 0; i<this.state.file.length; i++) {
      reader.readAsDataURL(file[0]);
    // }
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input type="file" onChange={this._handleImageChange} multiple />
          <button className="button" type="submit" onClick={this._handleSubmit}>Upload Image</button>
        </form>
        {$imagePreview}
      </div>
    );
  }
}

export default ImageUpload;