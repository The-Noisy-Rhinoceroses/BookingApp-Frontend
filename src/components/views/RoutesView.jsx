import React from 'react';
import { DashboardContainer, LandingContainer } from '../containers/modules/Main';

const RoutesView = props => {
    const {Route, Switch, isLoggedIn} = props;

    return (
        <Switch>

            {/* Global routes */}
            <Route path="/home" component={LandingContainer} />

            {isLoggedIn && (
                <Switch>

                    {/* User routes */}
                    <Route path="/dashboard" component={DashboardContainer} />
                    <Route component={DashboardContainer} />
                </Switch>
            )}

            {/* Initial landing component */}
            <Route component={LandingContainer} />

        </Switch>
    )
};

export default RoutesView;
