import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import NotesList from '../components/HomePage/NotesList';
import Layout from '../components/Layout';
import { getAllNotes, getAllSharedNotes, mySharedUsers } from '../redux/actions';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllNotes());
        dispatch(getAllSharedNotes());
        dispatch(mySharedUsers());
    }, [dispatch]);

    return (
        <Layout title="Home">
            <NotesList />
        </Layout>
    );
};

export default Home;
