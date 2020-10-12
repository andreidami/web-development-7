import React from "react";
import Switch from "react-switch";

export default class switchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggled: false,
      
    };
  }

  handleChange = (checked) => {
    console.log(checked);
    this.setState({
      isToggled: checked,
    });
  };

  render() {
    return (
      <label>
        {" "}
        <span>Pres to Toggle</span>
        <Switch onChange={this.handleChange} checked={this.state.isToggled} />
      </label>
    );
  }
}
