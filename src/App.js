import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
import EditProfile from './pages/EditProfile/EditProfile';
import RequestHistoryList from './pages/RequestHistoryList/RequestHistoryList';
import RequestHistoryDetails from './pages/RequestHistoryDetails/RequestHistoryDetails';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import Header from './shared/Header/Header';


const App = () => {
    return (
        <div>
            <Header />
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LogIn}/>
                    <Route path="/sign_up" exact component={SignUp} />
                    <Route path="/edit_profile" exact component={EditProfile} />
                    <Route path="/history_list" exact component={RequestHistoryList} />
                    <Route path="/history_details" exact component={RequestHistoryDetails} />
                    <Route path="/weather" exact component={WeatherPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default App;