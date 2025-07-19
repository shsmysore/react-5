import './WindowApp.css';
import ViewWindowSize from './components/ViewWindowSize';
import { Button, Container, Row } from 'react-bootstrap';
import { useState } from 'react';

export default function WindowApp() {
    const [showWindowSize, setShowWindowSize] = useState(false);

    function toggleWindowSizeDisplay() {
        setShowWindowSize(prevState => !prevState);
    }

    return (
        <Container className="window-app">
            <Row className="justify-content-center text-center">
                <h1>Window Application</h1>
                <Button onClick={toggleWindowSizeDisplay} variant="primary" 
                className="mt-3 py-2 px-5 text-lg font-semibold 
                rounded-lg shadow-md hover:shadow-lg 
                transition-shadow duration-300 w-50">Toggle Window size display</Button>
                
                {showWindowSize && <ViewWindowSize />}
            </Row>
        </Container>
    );
}