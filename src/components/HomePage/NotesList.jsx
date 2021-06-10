/* eslint-disable react/jsx-props-no-spreading */
import { AddBox, DeleteOutline, Edit } from '@material-ui/icons';
import MaterialTable from 'material-table';
import { forwardRef, useState } from 'react';
import styles from '../../styles/NotesListStyles.module.scss';
import CustomModal from './CustomModal';

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
                        { title: 'Name', field: 'name' },
                        { title: 'Surname', field: 'surname' },
                        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                        {
                            title: 'Birth Place',
                            field: 'birthCity',
                            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                        },
                    ]}
                    data={[
                        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                        { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
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

            <CustomModal open={open} handleClose={handleClose} />
        </>
    );
};

export default NotesList;
