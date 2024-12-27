import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './pages/Home/homePage';

import './utils/i18nConfig';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL || '/Portfolio'}>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    );
}

export default App;
