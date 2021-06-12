/* eslint-disable react/jsx-props-no-spreading */
import { TextField } from '@material-ui/core';
// import Select from "react-select";
import { Controller, useForm } from 'react-hook-form';

const InputNote = ({ onHandleSubmit, formType, selectedFormData }) => {
    const { control, handleSubmit } = useForm();

    const onSubmit = (data) => {
        if (selectedFormData) {
            onHandleSubmit({ ...data, id: selectedFormData?.id });
        } else {
            onHandleSubmit(data);
        }
    };

    return (
        <>
            <h3 style={{ textAlign: 'center', marginBottom: '1rem', color: '#105c7a' }}>
                {formType} Note
            </h3>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <Controller
                    name="title"
                    control={control}
                    defaultValue={formType === 'Update' ? selectedFormData.title : ''}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            style={{ margin: '0.5rem 0' }}
                            label="Title"
                            variant="outlined"
                        />
                    )}
                />
                <Controller
                    name="details"
                    control={control}
                    defaultValue={formType === 'Update' ? selectedFormData.details : ''}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            style={{ margin: '0.5rem 0' }}
                            label="Details"
                            variant="outlined"
                        />
                    )}
                />
                {/* <Controller
                name="iceCreamType"
                control={control}
                render={({ field }) => (
                    <Select
                        {...field}
                        options={[
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' },
                            { value: 'vanilla', label: 'Vanilla' },
                        ]}
                    />
                )}
            /> */}

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
                    <span>{formType}</span>
                </button>
            </form>

            <style>{`
                .MuiOutlinedInput-input {
                    padding: 25.5px 14px;
                }
            `}</style>
        </>
    );
};

export default InputNote;
