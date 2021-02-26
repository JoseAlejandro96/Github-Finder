import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
         searchUsers: PropTypes.func.isRequired,
         clearUsers: PropTypes.func.isRequired,
         showClear: PropTypes.bool.isRequired,
         setAlerts: PropTypes.func.isRequired
    }

    onChange = (event) => {
        /**
         * e.target.name -> el nombre del input es 'text' por tanto cambiara el this.state.name
         * si el nombre del input fuera 'email' cambiaria this.state.email
         */
        this.setState({[event.target.name]: event.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.text === ''){
            this.props.setAlerts('Please enter somenting', 'light');
        }else{
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })
        }
        
    }

    render() {
        const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input
                        type="text"
                        name="text" 
                        placeholder="Search Users..." 
                        value={this.state.text}
                        onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>}
                
            </div>
        )
    }
}

export default Search
