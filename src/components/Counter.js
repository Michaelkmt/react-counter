import React from "react";
import Button from './Button';



class Counter extends React.Component {

    state = {
        count: 0
    }

    increase = () => {
        this.setState({count: this.state.count + 1})
    }

    decrease = () => {
        this.setState({count: this.state.count - 1})
    }


    render() {
        return(
            <div className="card">
                <h1>{this.state.count}</h1>
                <Button add={this.increase} sub={this.decrease}/>
            </div>
        )
    }
}

export default Counter;
