import React from "react";
import Tool from "./Tool";
import SelectPosition from "./selectPosition";



class App extends React.Component {
  constructor(){
    super();
    this.state={
      showToolTip: false,
      position :"top"
    }
  }
  handleShowTooltip =() => {
    const {showToolTip} = this.state;
    let position = document.getElementById('Position').value;
    this.setState({
      showToolTip: ! showToolTip,
      position
    });
  }
  render(){
    
  return (
   <>
    <Tool  state={this.state}
    handleShowTooltip = {this.handleShowTooltip}/>
    <SelectPosition />
    </>
  );
}
}

export default App;
