import './MemeApp.css'
import Header from './components/Header.jsx'
import { useState, useEffect, use } from 'react';   

export default function MemeApp() {
    console.log('MemeApp component rendering ...');
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'https://i.imgflip.com/1bij.jpg',
    });
    const [allMemes, setAllMemes] = useState([]); // Use state to store memes

    // Fetch all memes from API only once when the component mounts first time.
    useEffect(() => {
        console.log('Fetching memes...');
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(resBody => {
            if (resBody.success === true) {
                setAllMemes(resBody.data.memes);
                console.log('Saved all memes locally, count: ' + allMemes.length);
            } else {
                console.error('Failed to fetch memes:', resBody.error_message);
            }   
        })
    }, []);

    function handleGenerateMeme(event) {
        console.log('Generating random meme... ' + allMemes.length + ' memes available');
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const randomMeme = allMemes[randomIndex];
        console.log('Random meme:', randomMeme);
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: randomMeme.url
        }));
    }

    function handleTextOnChange(event) {
        console.log('Handling text on change.');
        const newValue = event.target.value;
        const valueOn = event.target.name;
        if (valueOn === 'topText') {
            setMeme(prevMeme => ({
                ...prevMeme,
                topText: newValue
            }));
        } else if (valueOn === 'bottomText') {
            setMeme(prevMeme => ({
                ...prevMeme,
                bottomText: newValue
            }));
        }
    }

    return (
        <div className="meme-app">
            <Header />
            <main className="meme-content">
                <form className="meme-form">
                    <div className="meme-form-row">
                        <label>
                            Top text
                            <input type="text" name="topText" 
                                onChange={handleTextOnChange}
                                value={meme.topText}/>
                        </label>
                        <label>
                            Bottom text
                            <input type="text" name="bottomText" 
                                onChange={handleTextOnChange}
                                value={meme.bottomText}/>
                        </label>
                    </div>
                    <button type="button" onClick={handleGenerateMeme}>Generate Meme</button>
                </form>
                <div className="meme-image-container">
                    <section className="meme-display">
                    <img
                        src={meme.imageUrl}
                        alt="Meme Example"
                        className="meme-image"
                    />
                    <span className="top-text">{meme.topText}</span>
                    <span className="bottom-text">{meme.bottomText}</span>
                </section>
                </div>
            </main>
        </div>
    );
}