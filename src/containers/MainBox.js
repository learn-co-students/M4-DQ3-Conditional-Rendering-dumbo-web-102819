import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    id: 'profile'
  }

  handleClick = (e) => {
    this.setState({ id: e.target.id });
  }

  displayComponent =() => {
    switch(this.state.id) {
      case "profile":
        return <Profile />
      case "photo":
        return <Photos />
      case "cocktail":
        return <Cocktails />
      case "pokemon":
        return <Pokemon />
      default:
        return <Profile />
    }
  }

  render() {
    return (
      <div>
        <MenuBar 
          state={this.state.id}
          handleClick={this.handleClick}
        />
        {this.displayComponent()}
      </div>
    )
  }

}

export default MainBox
