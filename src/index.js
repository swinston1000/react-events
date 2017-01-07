import React from 'react';
import Hello from './hello';
import state from './state';

state.on('changeName', function(data) {
    ReactDOM.render(
        <Hello name={data} />,
        document.getElementById('root')
    );
});

//create initial state with default prop
state.updateName();
