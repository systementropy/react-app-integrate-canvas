import React from 'react';

const authContextLiteral = React.createContext({
    isAuthenticated: false,
    login: () => {}
})

export default authContextLiteral;