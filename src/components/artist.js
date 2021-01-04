import React from 'react';

export default class Artist extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0,
            title: ""
        }
    }

    handleClick() {
        this.setState({count: this.state.count+1,title: "counter"})
    }
    render() {
        return(
            <div>
                <h1> Hello develop </h1>
                <h1> Origin:  {this.props.band.Origin} </h1>
                <button onClick={()=>this.handleClick()}> Click Me </button>
                <h3> {this.state.title} {this.state.count} </h3>
            </div>
        )
    }
}

