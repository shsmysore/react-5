import './ViewWindowSize.css';
import { useState, useEffect } from 'react';

export default function ViewWindowSize() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    function handleResize() {
        setWindowSize(window.innerWidth);
    }

    useEffect(() => {
        console.log('Component mounted or updated. Attaching resize event listener.');
        window.addEventListener('resize', handleResize);
        return () => {
            console.log('Component being removed. Removing window event listener.');
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <h1>Current window size is: {windowSize}</h1>
    )
}