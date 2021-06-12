import { useSelector } from 'react-redux';

const ViewNote = () => {
    const notes = useSelector((state) => state.notes);

    return (
        <main style={{ padding: '1.5rem', maxWidth: '300px' }}>
            <h2 style={{ marginBottom: '1rem', color: '#105c7a' }}>
                {notes.selectedNoteDetails?.note?.title}
            </h2>
            <p>{notes.selectedNoteDetails?.note?.details}</p>
        </main>
    );
};

export default ViewNote;
