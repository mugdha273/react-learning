import React from 'react';

// don't change the Component name "App"
export default function App() {
    const [isClicked , setClicked] = React.useState('false')
    
    const clickHandler = () => {
        setClicked(!isClicked);
    }
     
    return (
        <div>
            {/* if isClicked is true then className will get updated with active and css styling will be applied */}
            <p className = {`${isClicked?'':'active'}`}>Style me!</p>
            <button onClick={clickHandler}>Toggle style</button>
        </div>
    );
}
