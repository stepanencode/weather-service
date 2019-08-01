import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/SignUp/SignUp';
// import EditProfile from './pages/EditProfile/EditProfile';
// import RequestHistoryList from './pages/RequestHistoryList/RequestHistoryList';
// import RequestHistoryDetails from './pages/RequestHistoryDetails/RequestHistoryDetails';
// import WeatherPage from './pages/WeatherPage/WeatherPage';
// import Header from './shared/Header/Header';
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

                    {/*<Route path="/edit_profile" exact >*/}
                    {/*    <Route component={Header}/>*/}
                    {/*    <Route component={EditProfile}/>*/}
                    {/*</Route>*/}
                    {/*<Route path="/history_list" exact>*/}
                    {/*    <Route component={Header}/>*/}
                    {/*    <Route component={RequestHistoryList} />*/}
                    {/*</Route>*/}
                    {/*<Route path="/history_details" exact >*/}
                    {/*    <Route component={Header}/>*/}
                    {/*    <Route component={RequestHistoryDetails} />*/}
                    {/*</Route>*/}
                    {/*<Route path="/weather" exact >*/}
                    {/*    <Route component={Header}/>*/}
                    {/*    <Route component={WeatherPage} />*/}
                    {/*</Route>*/}
                </Switch>
            </Router>
        </div>
    )
};

export default App;