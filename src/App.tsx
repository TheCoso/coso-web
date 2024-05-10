import type { Component } from 'solid-js';
import { Route, Router } from '@solidjs/router';

import Home from './pages/Home';

const App: Component = () => {
    return (
        <main class="">
            <Router>
                <Route path="/home" component={Home}/>
            </Router>
        </main>
    );
};

export default App;
