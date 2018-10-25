import React from 'react';
import { DashboardContainer, LandingContainer, ReviewFormContainer } from '../containers/modules/Main';

const RoutesView = props => {
    const {Route, Switch, isLoggedIn} = props;

    return (
        <Switch>

            {/* Global routes */}
            <Route exact path="/home" component={LandingContainer} />
            <Route exact path="/:barberId/:customerId/review" component={ReviewFormContainer} />
            {isLoggedIn && (
                <Switch>

                    {/* User routes */}
                    <Route exact path="/dashboard" component={DashboardContainer} />
                    <Route component={DashboardContainer} />
                </Switch>
            )}

            {/* Initial landing component */}
            <Route component={LandingContainer} />


        </Switch>
    )
};

export default RoutesView;
