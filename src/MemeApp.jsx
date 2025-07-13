import './MemeApp.css'
import Header from './components/Header.jsx'
import { useState } from 'react';   

export default function MemeApp() {
    const [meme, setMeme] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'https://i.imgflip.com/1bij.jpg',
    });

    function handleTextOnChange(event) {
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
                    <button type="submit">Generate Meme</button>
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