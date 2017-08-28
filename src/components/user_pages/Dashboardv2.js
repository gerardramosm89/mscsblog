import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { connect } from 'react-redux';
import { routePush, signIn, fetchToken, toggleModal, fetchBlogs, fetchImages } from '../../actions/index';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { safeURLify } from '../../utils/stringLowerAndReplaceSpaces';
import ImageUpload from '../image_upload';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BadgeExampleSimple from '../testing_grounds/materialBadge';
import ListExampleSimple from '../testing_grounds/materialList';


class Dashboardv2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      selectedMenuItem: 'Posts'
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
    axios.post('http://mlhq.io:3050/api/deleteOne', data)
      .then((response) => {
        this.props.fetchBlogs();
      });
  }
  route(path) {
    this.props.routePush(path);
  }
  renderBlogs() {
    if (this.props.blogs.length === 0) {
      return <div>No posts loaded, have you written any posts?</div>
    }
    return this.props.blogs.map(blog => {
      let date = blog.updatedAt.slice(2,10);
      return (
        <div 
        key={blog._id} href="#" className="list-group-item list-group-item-action flex-column align-items-start">
          <div className="d-flex w-100 justify-content-between">
            <h3 className="mb-1">{blog.title}</h3>
            <small className="text-muted">Updated: {date}</small>
          </div>
          <p className="mb-1">{blog.subheading}</p>
          <small className="text-muted">Path: {blog.learningPath.path}</small>
          <Link to={`/blogs/edit/${safeURLify(blog.title)}`}><button className="btn btn-warning">Edit Post</button></Link>          
          <button className="btn btn-danger" onClick={this.deletePost.bind(this, blog._id)}>Delete Post</button>
          <button 
          onClick={this.route.bind(this, `/blogs/${safeURLify(blog.title)}`)}
          className="btn btn-primary">View Post</button>
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
  manageMenu(e) {
    let menuItems = [this.posts, this.images]
    menuItems.map(menuItem => {
      if (menuItem.innerHTML == e.target.innerHTML) {
        menuItem.classList.add('active');
        this.setState({
          selectedMenuItem: menuItem.innerHTML
        });
      } else {
        if (menuItem.classList.contains('active')) menuItem.classList.remove('active');
      }
    });
  }
  renderImageComponent() {
    return(
      <div>
            <div className="row">
              <ImageUpload />
            </div>
              <div className="row">
                {this.renderImages()}
              </div>
      </div>
    );
  }
  render() {
    return(
      <div className='container-fluid' style={{marginTop: '2rem'}}>
        <div className="row">
          <div className="col-3">
            <ul className="list-group">
              <li
              onClick={this.manageMenu.bind(this)} 
              ref={posts => this.posts = posts}
              className="dashboard__list-group-item list-group-item active">
                Posts
              </li>
              <li
              onClick={this.manageMenu.bind(this)}
              ref={images => this.images = images}
              className="dashboard__list-group-item list-group-item">
                Images
              </li>
            </ul>
          </div>
          <div className="col-9">
            {(this.state.selectedMenuItem === 'Images' ?this.renderImageComponent(): null)}
            {this.state.selectedMenuItem === 'Posts' ? (
              <div className="col-9 list-group">
                <div className="col-10 offset-1 text-center">
                  <button className="btn btn-info" onClick={this.newPost.bind(this)}>New Post</button>
                </div>
                {this.renderBlogs()}
              </div>
            ): null}
          </div>
        </div>
      </div>
    );
  }
  // render() {
  //   return (
  //     <div>
  //       <div className="container-fluid">
  //         <div className="row">
  //           <nav className="dashboard__sidebar col-2 bg-faded sidebar">
  //             <ul className="nav nav-pills flex-column">
  //               <li className="nav-item">
  //                 <a className="nav-link dashboard__nav-link">Your Posts<span className="sr-only">(current)</span></a>
  //               </li>
  //               <li className="nav-item">
  //                 <a className="nav-link dashboard__nav-link">Your Images</a>
  //               </li>
  //             </ul>
  //           </nav>
  //           <main className="col-10">
  //             <h1>Dashboard</h1>
  //             <div className="container">
  //               <div className="row">
  //                 <ImageUpload />
  //               </div>
  //               <div className="row">
  //                 {this.renderImages()}
  //               </div>
  //             </div>
  //             <h2>Section title</h2>
  //             <div className="table-responsive">
  //               <table className="table table-striped">
  //                 <thead>
  //                   <tr>
  //                     <th>#</th>
  //                     <th>Title</th>
  //                     <th>Subheading</th>
  //                     <th>Author</th>
  //                     <th>Actions</th>
  //                   </tr>
  //                 </thead>
  //                 <tbody>
  //                   <tr>
  //                     <td>1,001</td>
  //                     <td>Lorem</td>
  //                     <td>ipsum</td>
  //                     <td>dolor</td>
  //                     <td>sit</td>
  //                   </tr>
  //                  </tbody>
  //               </table>
  //             </div>
  //           </main>
  //         </div>
  //       </div>
  //      </div>  
  //   );
  // }
}


function mapStateToProps(state) {
  return {
    token: state.token,
    blogs: state.blogs.blogs,
    images: state.images.images
  };
}
export default connect(mapStateToProps, { routePush, fetchImages, signIn, fetchToken, toggleModal, fetchBlogs })(Dashboardv2);