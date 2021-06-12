import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotesList from '../components/HomePage/NotesList';
import Layout from '../components/Layout';
import { getAllNotes } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNotes());
    }, [dispatch]);

    return (
        <Layout title="Home">
            <NotesList />
        </Layout>
    );
};

export default Home;
