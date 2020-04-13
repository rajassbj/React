import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season.js';
import Spinner from './spinner.js';
import useLocation from './useLocation';


const App = () => {
    const [lat, errorMessage] = useLocation();

    let content;
    if(errorMessage) {
        content = <div>Error: {errorMessage}</div>;
    } else  if(lat) {
        content = <Season lat={lat}/>;
    } else {
        content = <Spinner message="Plz accept location request"/>;
    }

    return (
        <div className="border red">
            {content}
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));