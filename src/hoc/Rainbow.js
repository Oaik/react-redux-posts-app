import React from 'react'

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'yellow'];
    const randomColur = colours[Math.floor(Math.random() * colours.length)];
    const className = randomColur + '-text';
    return (props) => {
        return(
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow