import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state={term: ''};
    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(this.state.term);
    }
    render() {
        return <div>
            <form onSubmit={(e) => {this.onSearchSubmit(e)}}>
                <div className="ui input focus">
                    <input type="text"
                        placeholder="Search..."
                        className="search-input"
                        onChange={(e) => {this.setState({term: e.target.value})}}/>
                </div>
            </form>
        </div>
    }
}

export default SearchBar;