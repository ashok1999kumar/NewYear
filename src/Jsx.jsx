import React from 'react'
import reactDom from 'react-dom';


// to create react-element using createElement() function.
const element = React.createElement('h1',{className:'greeding'},'Hello world');

// create function and passed argument as a object.
const fun = (obj) =>{
    return(
        obj.firstName+" "+obj.lastName
    )
}
const obj = {
    firstName:'shiva kumar',
    lastName:'mehta'
};

const tick = (obj) =>{
    return(
        <>
            <h1>Hello {obj.firstName+" "+obj.lastName}</h1>
            <h1>
                it is {new Date().toLocaleTimeString()}
            </h1>
        </>
    );
}

export const Jsx = () => {
    return (
        <p>{tick(obj) }</p>
    )
}
setInterval(tick,1000);
