import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loading from './components/Loading/Loading';
import AdminProtectedRoute from './HOC/AdminProtectedRoute';
import { userJwtToken } from './redux/actions';
import Login, { CheckRoute } from './routes/Login';

// routes (Code Splitting and Pre-fetching)
const About = lazy(() => import(/* webpackPrefetch:true */ './routes/About'));
const Home = lazy(() => import('./routes/Home'));
const PageNotFound = lazy(() => import('./routes/PageNotFound'));

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const error = localStorage.getItem('tokenError');
        if (error && error === 'Invalid or Expired JWT') {
            const mail = localStorage.getItem('technotesUser');
            dispatch(userJwtToken({ mail }));
        }
    }, [dispatch]);

    return (
        <Router>
            <Suspense fallback={<Loading />}>
                <Switch>
                    <AdminProtectedRoute exact path="/" component={Home} />
                    <CheckRoute path="/login" component={Login} />
                    <Route path="/about" component={About} />
                    <Route component={PageNotFound} />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
