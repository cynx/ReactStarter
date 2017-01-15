/**
 * Created by echosteg on 14/01/2017.
 */
import React, { Component } from 'react';
//above statement same as const Component  = React.Component;
class searchBar extends Component {

    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }
    render(){
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
            </div>
        );
    }

    onInputChange(event){
        this.setState({term: event.target.value});
    }
}

export default searchBar;