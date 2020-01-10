import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';
import './App.css';
import MainBox from './containers/MainBox.js'
// import userData from './data'
// import photo from './data'
// import cocktails from './data'
// import {cocktails, photo, userData} from './data'


class App extends Component {


  render() {
    console.log(this.state);
    return (
      <Grid centered column={1}>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
      <Grid.Row></Grid.Row>
        <Grid.Row >
          <Grid.Column width={10}>
            <Segment>
              <MainBox />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
