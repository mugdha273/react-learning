import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked, setClicked] = React.useState('false')
    const clickHandler = () =>{
        setClicked(!isClicked);
    }
    return (
        <div>
            {/* {} is used to write javascript code inside jsx */}
            <p style={{color: isClicked ? 'white':'red'}}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
