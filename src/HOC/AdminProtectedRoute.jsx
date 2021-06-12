/* eslint-disable react/jsx-props-no-spreading */
import { Redirect, Route } from 'react-router-dom';

export const isAuthenticate = () =>
    localStorage.getItem('technotesJWT') ? localStorage.getItem('technotesJWT') : false;

const AdminProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticate() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: props.location },
                    }}
                />
            )
        }
    />
);

export default AdminProtectedRoute;
