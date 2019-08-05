import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import history from './history';
import Protected from './Protected';

const App = () => {
    return (
        <div>
            <Router history={history}>
                <Switch>
                    <Route path="/login" exact component={LogIn}/>
                    <Route path="/sign_up" exact component={SignUp} />
                    <Route path="/" component={Protected} />
                </Switch>
            </Router>
        </div>
    )
};

export default App;