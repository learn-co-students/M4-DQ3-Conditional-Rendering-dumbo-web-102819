import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
    
  
   state={
     id: 'profile',
    }

  handelClick=(value) => {
    this.setState({
      id: value.target.id
    })
  }
   
  renderContent=(value) => {
    switch(value){
      case 'profile':
        return <Profile />
      case 'photo':
        return <Photos />
      case 'cocktail':
        return <Cocktails/>
      case 'pokemon':
        return <Pokemon/>
      default:
        return <Profile />
        

    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

   const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar handleClick={this.handelClick} parentId = {this.state.id}/>
        {this.renderContent(this.state.id)}
      </div>
    )
  }

}

export default MainBox
