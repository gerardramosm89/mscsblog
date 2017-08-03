import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, fetchToken, toggleModal, fetchBlogs, fetchImages } from '../../actions/index';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { safeURLify } from '../../utils/stringLowerAndReplaceSpaces';
import ImageUpload from '../image_upload';

class Dashboardv2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentWillMount() {
    if (!localStorage.getItem('token')) {
      this.props.history.push('/');
      this.props.toggleModal();
    }
  }
  componentDidMount() {
    this.props.fetchImages();
    this.props.fetchBlogs();
  }

  newPost() {
  }
  deletePost(postId) {
    const data = { token: this.props.token.token, postId: postId };
    axios.post('http://mlhq.io:3050/api/deleteOne', data).then((response) => {
      axios.post('http://mlhq.io:3050/api/queryblogs', { token: this.props.token.token })
      .then(response => {
        this.setState({
          blogs: response.data.blogs
        });
      });
    });  
  }
  renderBlogs() {
    if (this.props.blogs.length === 0) {
      return <div>No posts loaded, have you written any posts?</div>
    }
    return this.props.blogs.map(blog => {
      return (
        <div className="col-10 offset-1" key={blog._id}>
            <Link to={`/blogs/${safeURLify(blog.title)}`}><h5>{blog.title}</h5></Link>
            <Link to={`/blogs/edit/${safeURLify(blog.title)}`}><button className="btn btn-warning">Edit Post</button></Link>          
            <button className="btn btn-danger" onClick={this.deletePost.bind(this, blog._id)}>Delete Post</button>
        </div>
      );
    });
  }
  renderImages() {
    return this.props.images.map(image => {
      return (
        <div key={image.name} className="card dashboard__card">
          <img className="card-img-top dashboard__card--top" src={`/img/${image.name}`}alt="Card image cap" />
          <div className="card-block">
            <h4 className="card-title">{image.name}</h4>
            <button
            onClick={() => {
              axios.post(`/images/${image.name}`)
                .then(res => this.props.fetchImages());
            }} 
            className="btn btn-danger"
            >Delete Image</button>
          </div>
        </div>
      );
    })
  }
  newPost(e) {
    e.preventDefault();
    this.props.history.push('/blogs/new');
  }
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <nav className="dashboard__sidebar col-2 bg-faded sidebar">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link dashboard__nav-link">Your Posts<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link dashboard__nav-link">Your Images</a>
                </li>
              </ul>
            </nav>
            <main className="col-10">
              <h1>Dashboard</h1>
              <div className="container">
                <div className="row">
                  <ImageUpload />
                </div>
                <div className="row">
                  {this.renderImages()}
                </div>
              </div>
              <h2>Section title</h2>
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Subheading</th>
                      <th>Author</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1,001</td>
                      <td>Lorem</td>
                      <td>ipsum</td>
                      <td>dolor</td>
                      <td>sit</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    token: state.token,
    blogs: state.blogs.blogs,
    images: state.images.images
  };
}
export default connect(mapStateToProps, { fetchImages, signIn, fetchToken, toggleModal, fetchBlogs })(Dashboardv2);