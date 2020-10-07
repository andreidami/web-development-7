import React from 'react';
 
export default class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
        }
    }

    increment = () => {
        this.setState((previousState) => {
            return {
                counter: previousState.counter +1,
            }
        });

    };

    decrement = () => {
        this.setState((previousState) => {
            return {
                counter: previousState.counter -1,
            }
        });

    };





    render(){
        return (
            <div>
                <button onClick={this.increment}>+</button>
                {this.state.counter}
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}