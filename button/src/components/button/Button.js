import React from "react";
import './Button.css';
import pretty from "pretty"

class Button extends React.Component {

  constructor(props) {
    super(props)
    this.state = {toggled: false}
    this.handleClick = this.handleClick.bind(this)
    this.case = document.querySelector('#choixAnim')
    this.idButton = "button1"
    console.log(this.case)
  }

  handleClick() {
    this.setState((oldState) => {
      console.log(oldState)
      return {toggled: !oldState.toggled}
    })
  }

  changeAnim(newAnim) {
    this.idButton = newAnim
  }

  render() {
    return (
      <div
         data-testid="button"
         className={this.state.toggled ? 'toggled' : 'untoggled'}
         onClick={this.handleClick}
      >
        <a id={this.idButton} >{this.props.children ? this.props.children : "Add text!"}</a>
      </div>);
  }

}


export default Button;
