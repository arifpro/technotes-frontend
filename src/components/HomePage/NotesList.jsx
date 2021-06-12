/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { AddBox, Delete, Edit, Share } from '@material-ui/icons';
import MaterialTable from 'material-table';
import { forwardRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createNote, deleteNoteById } from '../../redux/actions';
import styles from '../../styles/NotesListStyles.module.scss';
// import AddNote from './AddNote';
import CustomModal from './CustomModal';
import InputNote from './InputNote';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Share: forwardRef((props, ref) => <Share {...props} ref={ref} />),
};

const NotesList = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);

    const [open, setOpen] = useState(false);
    const [formType, setFormType] = useState('Add');
    const [selectedFormData, setSelectedFormData] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onHandleSubmit = (data) => {
        // console.log(data);
        dispatch(createNote(data));
    };

    const handleDelete = (data) => {
        // eslint-disable-next-line no-alert
        // eslint-disable-next-line no-restricted-globals
        const reply = confirm('Are you sure?');

        // if (reply === true) dispatch(deleteNoteById());
        console.log({ data, reply });
    };

    console.log(notes.notesData);

    return (
        <>
            <div className={styles.notesList}>
                <button
                    type="button"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        borderRadius: '25px',
                        padding: '0.2rem 1rem',
                        marginTop: '3rem',
                        marginBottom: '1rem',
                        background: 'white',
                        boxShadow: '2px 1px 8px rgba(0, 0, 0, 0.2)',
                    }}
                    onClick={() => {
                        setFormType('Add');
                        handleOpen(true);
                    }}
                >
                    <AddBox htmlColor="#305cba" />
                    <span>Add Notes</span>
                </button>

                <MaterialTable
                    title="Notes"
                    tableIcons={tableIcons}
                    columns={[
                        { title: '#', field: 'no' },
                        { title: 'Title', field: 'title' },
                        { title: 'Details', field: 'details' },
                        { title: 'Date', field: 'date' },
                    ]}
                    data={[
                        { no: '1', title: 'lorem...', details: 'lorem...', date: '12-30-2021' },
                        { no: '2', title: 'lorem...', details: 'lorem...', date: '12-30-2021' },
                        { no: '3', title: 'lorem...', details: 'lorem...', date: '12-30-2021' },
                    ]}
                    options={{
                        exportButton: true,
                    }}
                    actions={[
                        {
                            icon: () => (
                                <div>
                                    <Edit htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                // console.log(rowData);
                                setSelectedFormData(rowData);
                                setFormType('Update');
                                handleOpen(true);
                            },
                        },
                        {
                            icon: () => (
                                <div>
                                    <Delete htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                // console.log(rowData);
                                // setSelectedFormData(rowData);
                                // setFormType('Delete');
                                // handleOpen(true);
                                handleDelete(rowData);
                            },
                        },
                        {
                            icon: () => (
                                <div>
                                    <Share htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                // console.log(rowData);
                                setSelectedFormData(rowData);
                                setFormType('Share');
                                handleOpen(true);
                            },
                        },
                    ]}
                />
            </div>

            <CustomModal open={open} handleClose={handleClose}>
                {/* <main style={{ maxWidth: '600px' }}>
                    <AddNote editable={false} />
                </main> */}
                <main style={{ padding: '1.5rem' }}>
                    <InputNote
                        onHandleSubmit={onHandleSubmit}
                        formType={formType}
                        selectedFormData={selectedFormData}
                    />
                </main>
            </CustomModal>
        </>
    );
};

export default NotesList;
