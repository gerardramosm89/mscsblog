import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';

export default class ListExampleSimple extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <List>
          <ListItem primaryText="Posts" leftIcon={<ContentInbox />} />
          <ListItem primaryText="Images" leftIcon={<ActionGrade />} />
        </List>
        <Divider />
        <List>
          <ListItem primaryText="Other Settings" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Some other settings" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
          <ListItem primaryText="Follow up" rightIcon={<ActionInfo />} />
        </List>
      </div>
    );
  }
}