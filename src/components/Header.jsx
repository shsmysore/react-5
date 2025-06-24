import './Header.css'
import logo from '../assets/meme_cat.png';

export default function Header() {
    return (
        <header className="header">
            <img
                src={logo}
                alt="Meme Logo"
                className="header-icon"
            />
            <span className="header-title">Meme Generator</span>
        </header>
    );
}