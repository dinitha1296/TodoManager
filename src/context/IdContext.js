import React from 'react';

const IdContext = React.createContext({
    nextId: 0,
    changeNextId: () => {},
});

export default IdContext;
