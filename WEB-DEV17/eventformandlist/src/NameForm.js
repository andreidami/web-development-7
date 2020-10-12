import React from "react";

export default class NameForm extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            firstName: "",
            lastName: "",
            gender: "female"
        }
    }

    handleGenderChange = event => {
        this.setState({
            gender: event.target.value
        })
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value,
        })

    };

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value,
        })

    };



    handleSubmit = event => {
        alert("A name was submited:" + this.state.firstName + "" + this.state.lastName + "" + this.state.gender);
        event.preventDefault();
    }



    render() {
        return (
            
            <form>
                <label>
                    First Name:
                    <input type="text" placeholder="Enter name..." value={this.state.firstName}onChange={this.handleFirstNameChange}
                     />

                    Last Name:
                    <input type="text" placeholder="Enter name..." value={this.state.lastName}onChange={this.handleLastNameChange}
                     />
                </label>
                <label>
                    Gender:
                    <select value={this.state.gender} onChange={this.handleGenderChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </label>
                <input type="submit" onClick={this.handleSubmit} />
            </form>
        )
    }
}