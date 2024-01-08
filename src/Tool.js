import { Component } from "react";
import "./toolStyle.css"
class Tool extends Component{
render(){
    const {showToolTip,position} = this.props.state;
    const {handleShowTooltip} = this.props;
    return(
        <>
        <div>
            {/* BUTTON */}
        <div className="tool-button" onMouseOver={handleShowTooltip} onMouseOut={handleShowTooltip}>
           { <div className="btn-info"> Hover Over Me!!</div>}
        </div>
        {/* CODE FOR THE TOOLTIP */}
        {
        showToolTip?<div className={`box-${position} arrow-${position}`} style={{color: "blue", display: "flex", alignItems: "center"}}><strong>I'm the Tooltip!!</strong></div>:null
        }
        </div>
        </>
    );
}
}
export default Tool;