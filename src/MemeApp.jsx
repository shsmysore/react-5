import './MemeApp.css'
import Header from './components/Header.jsx'

export default function MemeApp() {
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
                        src="https://i.imgflip.com/1bij.jpg"
                        alt="Meme Example"
                        className="meme-image"
                    />
                    <span className="top-text">Top Text</span>
                    <span className="bottom-text">Bottom Text</span>
                </section>
                </div>
            </main>
        </div>
    );
}