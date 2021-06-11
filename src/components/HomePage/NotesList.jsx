/* eslint-disable react/jsx-props-no-spreading */
import { AddBox, DeleteOutline, Edit } from '@material-ui/icons';
import MaterialTable from 'material-table';
import { forwardRef, useState } from 'react';
import styles from '../../styles/NotesListStyles.module.scss';
import CustomModal from './CustomModal';
import AddNote from './AddNote';

// eslint-disable-next-line no-unused-vars
const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
};

const NotesList = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className={styles.notesList}>
                <AddBox htmlColor="#305cba" onClick={() => handleOpen(true)} />
                <MaterialTable
                    title="Basic Export Preview"
                    columns={[
                        { title: '#', field: 'no' },
                        { title: 'Note', field: 'note' },
                        { title: 'Date', field: 'date' },
                    ]}
                    data={[
                        { no: '1', note: 'lorem...', date: '12-30-2021' },
                        { no: '2', note: 'lorem...', date: '12-30-2021' },
                        { no: '3', note: 'lorem...', date: '12-30-2021' },
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
                                console.log(rowData);

                                handleOpen(true);
                            },
                        },
                        {
                            icon: () => (
                                <div>
                                    <DeleteOutline htmlColor="#305cba" />
                                </div>
                            ),
                            tooltip: 'Preview',
                            onClick: (event, rowData) => {
                                console.log(rowData);

                                handleOpen(true);
                            },
                        },
                    ]}
                />
            </div>

            <CustomModal open={open} handleClose={handleClose}>
                <main style={{ maxWidth: '600px' }}>
                    <AddNote editable={false} />
                </main>
            </CustomModal>
        </>
    );
};

export default NotesList;
