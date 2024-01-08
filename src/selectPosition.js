import React from "react";
import Style from "./selectPosition.module.css";

class SelectPosition extends React.Component{
    render(){
        return(
           <div className={Style.positionSelector}>
            <label>Select the Position :-</label>
            <select name="Position" id="Position">
                <option value="top">Top</option>
                <option value="left">Left</option>
                <option value="right">Right</option>
                <option value="bottom">Bottom</option>
            </select>
           </div>
        );
    }
}
export default SelectPosition;