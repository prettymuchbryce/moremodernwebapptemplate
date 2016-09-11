import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import ComponentMain from '../components/main';

export default function(history) {
    return (
        <Router history={history}>
            <Route path="/" component={ComponentMain}>
            </Route>
        </Router>
    );
};
