import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotesList from '../components/HomePage/NotesList';
import Layout from '../components/Layout';
import { getAllNotes, getAllSharedNotes } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNotes());
        dispatch(getAllSharedNotes());
    }, [dispatch]);

    return (
        <Layout title="Home">
            <p style={{ marginTop: '3rem', textAlign: 'center' }}>
                My Email: <strong>{localStorage.getItem('technotesUser')}</strong>
            </p>
            <NotesList />
        </Layout>
    );
};

export default Home;
