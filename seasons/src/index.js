import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season.js';
import Spinner from './spinner.js';


class App extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { lat: null, errorMessage: '' };
    // }

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if(!this.state.errorMessage && this.state.lat) {
            return <Season lat={this.state.lat}/>;
        }

        return <Spinner message="Plz accept location request"/>;

    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));