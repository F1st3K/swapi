import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ClientRoutes from "./pages/ClientRoutes";

function App() {
        return (
            <Router>
                <ClientRoutes></ClientRoutes>
            </Router>
        );
    }

    export default App;
