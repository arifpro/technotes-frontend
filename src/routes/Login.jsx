/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticate } from '../HOC/AdminProtectedRoute';
import { userJwtToken } from '../redux/actions';

export const CheckRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            isAuthenticate() ? (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location },
                    }}
                />
            ) : (
                <Component {...props} />
            )
        }
    />
);

const Login = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({});

    const onHandleSubmit = (e) => {
        e.preventDefault();

        dispatch(userJwtToken(formData));

        <Redirect to="/" />;
    };

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={formData?.email}
                    onChange={(e) => setFormData({ ...formData, mail: e.target.value })}
                />
                <button type="submit">Enter</button>
            </form>
        </div>
    );
};

export default Login;
