/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { shareNote } from '../../redux/actions';

const ShareNote = ({ selectedFormData, setOpenShare }) => {
    const { control, handleSubmit } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (selectedFormData) {
            dispatch(shareNote({ ...data, noteId: selectedFormData?.id }));
        }

        setOpenShare(false);
    };

    return (
        <main style={{ padding: '1.5rem' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#105c7a' }}>
                Share Note
            </h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <Controller
                    name="sharedTo"
                    control={control}
                    defaultValue=""
                    render={({ field }) => (
                        <TextField
                            {...field}
                            style={{ margin: '0.5rem 0' }}
                            label="Email"
                            variant="outlined"
                        />
                    )}
                />

                <button
                    type="submit"
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: 'none',
                        borderRadius: '25px',
                        marginTop: '1rem',
                        backgroundColor: '#305cba',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        boxShadow: '2px 1px 8px rgba(0, 0, 0, 0.2)',
                    }}
                >
                    <span>Share</span>
                </button>
            </form>

            <style>{`
                .MuiOutlinedInput-input {
                    padding: 25.5px 14px;
                }
            `}</style>
        </main>
    );
};

export default ShareNote;
