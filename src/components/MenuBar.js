import React from 'react'

const MenuBar = (props) => {

  /*

  The 'a' tags below are the menu items. Think about the way a menu
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

  const classSetter = (id) => {
      if (id === props.activeButton) {
        return 'item active'
    } else {
      return 'item'
    }
  }

  return (
    <div className="ui four item menu">
      <a onClick={props.handleClick} className={classSetter("profile")} id="profile">
        <i className="user large icon" id="profile"/>
      </a>

      <a onClick={props.handleClick} className={classSetter("photo")} id="photo">
        <i className="photo large icon" id="photo"/>
      </a>

      <a onClick={props.handleClick} className={classSetter("cocktail")} id="cocktail">
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a onClick={props.handleClick} className={classSetter("pokemon")} id="pokemon">
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
