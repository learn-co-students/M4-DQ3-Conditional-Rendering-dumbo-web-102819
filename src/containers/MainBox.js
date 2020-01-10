import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    // profile: Profile,
    // photos: Photos,
    // cocktails: Cocktails,
    // pokemon: Pokemon,

    buttonClicked: ''
  }

  handleClick = (clickEvent) => {
    let userChoice = clickEvent.target.id

    this.setState({
      buttonClicked: userChoice
    })
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = (buttonClicked) => {
      switch (buttonClicked) {
        case "profile":
          // return this.state.profile()
        return  <Profile />
        case "photo":
          // return this.state.photos()
          return <Photos />

        case "cocktail":
          // return this.state.cocktails()
          return <Cocktails />

        case "pokemon":
          // return this.state.pokemon
          return <Pokemon />

      }
    }


    return (
      <div>
        <MenuBar activeButton={this.state.buttonClicked} handleClick={this.handleClick}/>
        {detailsToDisplay(this.state.buttonClicked)}
      </div>
    )
  }

}

export default MainBox
