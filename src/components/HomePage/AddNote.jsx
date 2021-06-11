import CustomSlateEditor from './CustomSlateEditor';

const AddNote = () => (
    <>
        <section
            style={{
                margin: '5rem 0',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <h2 style={{ fontFamily: 'monospace', color: '#3c444c', marginBottom: '1rem' }}>
                Slate Editor Mini
            </h2>
            <main
                style={{
                    maxWidth: '600px',
                    background: 'white',
                    borderRadius: '19px',
                    boxShadow: '2px 1px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <CustomSlateEditor />
            </main>
        </section>
    </>
);

export default AddNote;
