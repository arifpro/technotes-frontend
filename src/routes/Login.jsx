/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Redirect, Route, useHistory } from 'react-router-dom';
import { push } from 'react-router-redux';
import { isAuthenticate } from '../HOC/AdminProtectedRoute';
import { userJwtToken } from '../redux/actions';

const onPushPress = () => (dispatch) => dispatch(push('/'));

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
    const { control, handleSubmit } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        dispatch(userJwtToken(data));

        onPushPress();
        history.push('/');
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <>
                <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#105c7a' }}>
                    Login
                </h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    style={{ display: 'flex', flexDirection: 'column' }}
                >
                    <Controller
                        name="mail"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                {...field}
                                style={{ margin: '0.5rem 0' }}
                                label="Enter your email"
                                variant="outlined"
                            />
                        )}
                    />

                    <button
                        type="submit"
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: 'none',
                            borderRadius: '25px',
                            marginTop: '1rem',
                            backgroundColor: '#305cba',
                            color: '#fff',
                            padding: '0.5rem 1rem',
                            boxShadow: '2px 1px 8px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <span>submit</span>
                    </button>
                </form>

                <style>{`
                .MuiOutlinedInput-input {
                    padding: 25.5px 14px;
                }
            `}</style>
            </>
        </div>
    );
};

export default Login;
