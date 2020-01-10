import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    clickedOn: 'profile'
  }

  changeClickedOn = (clicked) => {
    this.setState({
      clickedOn: clicked
    })
  }

  detailsToDisplay = () => {
    switch (this.state.clickedOn){
      case 'profile':
        return <Profile/>
        break;
      case 'photos':
        return <Photos/>
        break;
      case 'cocktails':
        return <Cocktails/>
        break;
      case 'pokemon':
        return <Pokemon/>
        break;
    }
  }

  render() {

    /*
    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?
    */

    return (
      <div>
        <MenuBar  clickedOn={this.state.clickedOn} changeClickedOn={this.changeClickedOn}/>
        {this.detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox