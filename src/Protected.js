import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';


import { connect } from 'react-redux';
import history from './history'
import { checkLogin } from './actions/auth.thunk'
import LogIn from "./pages/LogIn/LogIn";
import SignUp from "./pages/SignUp/SignUp";

import EditProfile from './pages/EditProfile/EditProfile';
import RequestHistoryList from './pages/RequestHistoryList/RequestHistoryList';
import RequestHistoryDetails from './pages/RequestHistoryDetails/RequestHistoryDetails';
import WeatherPage from './pages/WeatherPage/WeatherPage';
import Header from './shared/Header/Header';


class Protected extends React.Component {

    componentDidMount() {
        this.props.checkLogin()
    }

    render () {
        const { authenticated, checkloginRequestCompleted } = this.props;
        if(!authenticated && !checkloginRequestCompleted) return null;
        if(!authenticated && checkloginRequestCompleted) return <Redirect to={"/login"}/>;
        return (
            <Switch>
                <Route path="/edit_profile" exact >
                    <Route component={Header}/>
                    <Route component={EditProfile}/>
                </Route>
                <Route path="/history_list" exact>
                    <Route component={Header}/>
                    <Route component={RequestHistoryList} />
                </Route>
                <Route path="/history_details" exact >
                    <Route component={Header}/>
                    <Route component={RequestHistoryDetails} />
                </Route>
                <Route path="/" exact >
                    <Route component={Header}/>
                    <Route component={WeatherPage} />
                </Route>
            </Switch>
        )
    }
}

export default connect((state) => ({
    authenticated: state.auth.authenticated,
    checkloginRequestCompleted: state.auth.checkloginRequestCompleted,
}), {
    checkLogin
})(Protected)