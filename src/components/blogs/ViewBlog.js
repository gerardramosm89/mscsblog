import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import DisqusThread from './DisqusThread';
import { safeURLify } from '../../utils/stringLowerAndReplaceSpaces';
import Prism from 'prismjs';
import { fetchOneBlog} from '../../actions/index';

class ViewBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }
  componentDidMount() {
    let data = { token: this.props.token.token, postId: this.props.match.params.id };
    
    // Grab Post
    axios.post('http://mlhq.io:3050/api/fetchone', data)
      .then(res => {
        this.setState({
          post: res.data[0]
        });
      });
    this.props.fetchOneBlog(data);
  }
  componentDidUpdate() {
    Prism.highlightAll();
  }
  dangerousInnerHTML() {
    return { __html: this.state.post.content }
  }
  render() {
    return (
      <div className="viewblog__container">
        <div className="viewblog__header">
          <h1 className="viewblog__header--title">{this.state.post.title}</h1>
          <div className="viewblog__header--hr">
            <hr />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1 viewblog__content">
              <div dangerouslySetInnerHTML={this.dangerousInnerHTML()} />
              {this.state.post.title ? (
                <DisqusThread id={this.state.post._id}
                  title={this.state.post.title}
                  path={`/blog/${this.state.post.title}`} />
              ) : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { token: state.token };
}
export default connect(mapStateToProps, { fetchOneBlog })(ViewBlog);