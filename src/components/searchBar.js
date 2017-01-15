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
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)}
                />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default searchBar;