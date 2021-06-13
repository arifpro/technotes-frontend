import { useSelector } from 'react-redux';

const ViewNote = ({ noteType }) => {
    const notes = useSelector((state) => state.notes);
    const sharedNotes = useSelector((state) => state.sharedNotes);

    let selectedNotes = notes?.selectedNoteDetails;

    if (noteType === 'SharedNote') {
        selectedNotes = sharedNotes?.selectedSharedNoteDetails;
    }

    return (
        <main style={{ padding: '1.5rem', maxWidth: '300px' }}>
            <h2 style={{ marginBottom: '1rem', color: '#105c7a' }}>{selectedNotes?.note?.title}</h2>
            <p>{selectedNotes?.note?.details}</p>
        </main>
    );
};

export default ViewNote;
