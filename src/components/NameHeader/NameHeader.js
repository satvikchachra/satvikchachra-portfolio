import React from 'react';

const NameHeader = props => {
    return (
        <div>
            <h1 style={props.darkMode ? { color: "#d3cecc" } : null}>Satvik Chachra</h1>
        </div>
    );
};

export default NameHeader;