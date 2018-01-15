import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import { connect } from 'react-redux';
import { routePush, signIn, fetchToken, toggleModal, fetchBlogs, fetchImages } from '../../actions/index';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { safeURLify } from '../../utils/stringLowerAndReplaceSpaces';
import ImageUpload from '../image_upload';
import ChangePasswordComponent from './dashboard_components/change_password_component';
import Payments from './dashboard_components/payments';
import { keys } from '../../../config/clientConfigs/keys';
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
    console.log('mounted');
    this.props.fetchImages();
    this.props.fetchBlogs();
  }
  deletePost(postId) {
    const data = { token: this.props.token.token, postId: postId };
    axios.post('https://mlhq.io/api/deleteOne', data)
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
    let menuItems = [this.posts, this.images, this.changePassword, this.manageSubscription];
    menuItems.map(menuItem => {
      if (menuItem.innerHTML == e.target.innerHTML) {
        menuItem.classList.add('active');
        this.setState({
          selectedMenuItem: menuItem.innerHTML
        }, () => console.log(`current selected menu is: ${this.state.selectedMenuItem}`));
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
  renderChangePassword() {
    console.log('rendering change pass');
    return(
      <div>
        <ChangePasswordComponent />
      </div>
    )
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
              <li
              onClick={this.manageMenu.bind(this)}
              ref={changePassword => this.changePassword = changePassword}
              className="dashboard__list-group-item list-group-item">
                Change your password
              </li>
              <li
              onClick={this.manageMenu.bind(this)}
              ref={manageSubscription => this.manageSubscription = manageSubscription}
              className="dashboard__list-group-item list-group-item">
                Manage Subscription
              </li>
            </ul>
          </div>
          <div className="col-9">
            {(this.state.selectedMenuItem === 'Manage Subscription' ? <Payments /> : null)}          
            {(this.state.selectedMenuItem === 'Images' ? this.renderImageComponent() : null)}
            {(this.state.selectedMenuItem === 'Change your password' ? this.renderChangePassword() : null)}
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
}


function mapStateToProps(state) {
  return {
    token: state.token,
    blogs: state.blogs.blogs,
    images: state.images.images
  };
}
export default connect(mapStateToProps, { routePush, fetchImages, signIn, fetchToken, toggleModal, fetchBlogs })(Dashboardv2);
