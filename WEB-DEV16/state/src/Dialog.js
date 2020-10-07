import React from "react";
import "./dialog.css";

export default class Dialog extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        isOpen: false,
    };
}


openDialog = () =>
{
    this.setState({
        isOpen:true,
    
    })
}

closeDialog = () => {
    this.setState({
        isOpen: false,
    })
}
    render() {
        return(
             <div>
        <button onClick={this.openDialog}>Pop up</button>;
         {this.state.isOpen &&  (
         <div className="dialog">
              <button onClick={this.closeDialog}>x</button>
              hey i am now here
              </div>)}
            
        
        </div>
          );
    };
}