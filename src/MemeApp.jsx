import './MemeApp.css'
import Header from './components/Header.jsx'
import { useState } from 'react';   

export default function MemeApp() {
    const [meme, setMeme] = useState({
        topText: 'Top Text',
        bottomText: 'Bottom Text',
        imageUrl: 'https://i.imgflip.com/1bij.jpg',
    });

    return (
        <div className="meme-app">
            <Header />
            <main className="meme-content">
                <form className="meme-form">
                    <div className="meme-form-row">
                        <label>
                            Top text
                            <input type="text" name="topText" />
                        </label>
                        <label>
                            Bottom text
                            <input type="text" name="bottomText" />
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