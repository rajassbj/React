import React from 'react';
import ReactDOM from 'react-dom';


const App = () => {
    const buttonText = 'Click Me';
    return <div>
        <label htmlFor="name" className="label">Name:</label>
        <input id="name" type="text"/>
        <button style={{ backgroundColor: 'blue', color: 'white' }}>{buttonText}</button>
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'));