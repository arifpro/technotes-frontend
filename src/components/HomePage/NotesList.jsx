/* eslint-disable prettier/prettier */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import Divider from '@material-ui/core/Divider';
import {AddBox, Delete, Edit, Share, Visibility} from '@material-ui/icons';
import MaterialTable from 'material-table';
import {forwardRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createNote, deleteNoteById, getNoteDetailsById, updateNoteById} from '../../redux/actions';
import styles from '../../styles/NotesListStyles.module.scss';
// import AddNote from './AddNote';
import CustomModal from './CustomModal';
import InputNote from './InputNote';
import ViewNote from './ViewNote';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Share: forwardRef((props, ref) => <Share {...props} ref={ref} />),
    Visibility: forwardRef((props, ref) => <Visibility {...props} ref={ref} />),
};

const NotesList = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state) => state.notes);
    const sharedNotes = useSelector((state) => state.sharedNotes);

    console.log(sharedNotes);

    const [open, setOpen] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [formType, setFormType] = useState('Add');
    const [noteType, setNoteType] = useState('Note');
    const [selectedFormData, setSelectedFormData] = useState(null);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onHandleSubmit = (data) => {
        console.log(data);

        if (formType === 'Add') {
            dispatch(createNote(data));
        } else if (formType === 'Update') {
            dispatch(updateNoteById(data));
        }

        setOpen(false);
    };

    const handleDelete = (data) => {
        const reply = confirm('Are you sure?');
        if (reply === true) dispatch(deleteNoteById(data?.id));   
    };

    const handleOpenView = (isOpen, rowData) => {
        setOpenView(isOpen);
        dispatch(getNoteDetailsById(rowData?.id));
    };

    return (
        <>
            <div className={styles.notesList}>
                <h1>Notes List</h1>
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
                        { title: 'Date', field: 'created' },
                    ]}
                    // data={[
                    //     { no: '1', title: 'lorem...', details: 'lorem...', date: '12-30-2021' },
                    //     { no: '2', title: 'lorem...', details: 'lorem...', date: '12-30-2021' },
                    //     { no: '3', title: 'lorem...', details: 'lorem...', date: '12-30-2021' },
                    // ]}
                    data={notes.notesData?.notes?.map((note, i) => {
                        if (note.details.length > 10) {
                            return { ...note, details: `${note.details.substring(0, 10)}...`, created: note.created.split(' ')[0], no: i+1 };
                        }

                        return {...note, created: note.created.split(' ')[0], no: i+1};
                    })}
                    options={{
                        exportButton: true,
                    }}
                    actions={[
                        {
                            icon: () => (
                                <div>
                                    <Visibility htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                // console.log(rowData);
                                setSelectedFormData(rowData);
                                setNoteType('Note');
                                handleOpenView(true, rowData);
                            },
                        },
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
                                setFormType('Delete');
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


            <Divider style={{ height: '2px', marginTop: '5rem' }} />


            {/* shared list */}
            <div className={styles.notesList}>
                <h1 style={{marginBottom: '2rem'}}>Shared Notes List</h1>
        

                <MaterialTable
                    title="Notes"
                    tableIcons={tableIcons}
                    columns={[
                        { title: '#', field: 'no' },
                        { title: 'Title', field: 'title' },
                        { title: 'Details', field: 'details' },
                        { title: 'Date', field: 'created' },
                    ]}
                    data={sharedNotes.sharedNotesData?.notes?.map((note, i) => {
                        if (note.details.length > 10) {
                            return { ...note, details: `${note.details.substring(0, 10)}...`, created: note.created.split(' ')[0], no: i+1 };
                        }

                        return {...note, created: note.created.split(' ')[0], no: i+1};
                    })}
                    options={{
                        exportButton: true,
                    }}
                    actions={[
                        {
                            icon: () => (
                                <div>
                                    <Visibility htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                // console.log(rowData);
                                setSelectedFormData(rowData);
                                setNoteType('SharedNote');
                                handleOpenView(true, rowData);
                            },
                        },
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
                                setOpenView(true);
                            },
                        },
                    ]}
                />
            </div>


            <Divider style={{ height: '2px', marginTop: '5rem' }} />


            {/* users I share notes with */}
            <div className={styles.notesList}>
                <h1 style={{marginBottom: '2rem'}}>users I share notes with</h1>
        

                <MaterialTable
                    title="Notes"
                    tableIcons={tableIcons}
                    columns={[
                        { title: '#', field: 'no' },
                        { title: 'Name', field: 'name' },
                        { title: 'Email', field: 'mail' },
                        { title: 'Last Login', field: 'lastLogin' },
                    ]}
                    data={sharedNotes.mySharedUsers?.models?.map((data, i) => ({
                        name: data.user.first_name.length > 0 ? `${data.user.first_name  } ${  data.user.last_name}` : '--',
                        mail: data.user.mail,
                        lastLogin: data.user.last_login.split(' ')[0],
                        no: i+1
                    }))}
                    options={{
                        exportButton: true,
                    }}
                    actions={[
                        {
                            icon: () => (
                                <div>
                                    <Visibility htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                // console.log(rowData);
                                setSelectedFormData(rowData);
                                setNoteType('SharedNote');
                                handleOpenView(true, rowData);
                            },
                        },
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
                                setOpenView(true);
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

            <CustomModal open={openView} handleClose={() => setOpenView(false)}>
                <ViewNote noteType={noteType} />
            </CustomModal>
        </>
    );
};

export default NotesList;
