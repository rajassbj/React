import React , { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [ resource, setResource] = useState('posts');
    return (
        <div>
            <div>
                <button onClick={() => setResource('posts')}>Posts</button>
                <button onClick = {() => setResource('todos')}>Todos</button>
            </div>
            <div>
                <ResourceList resource={resource}/>
            </div>
            <div>
                <UserList/>
            </div>
        </div>
    )
}

export default App;