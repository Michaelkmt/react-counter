import React from "react";


class Button extends React.Component {
    render(){
        return(
            <div>

                <button onClick={this.props.add}>ADD</button>
                <button onClick={this.props.sub}>SUB</button>
                
            </div>
        )
    }
}

export default Button;


