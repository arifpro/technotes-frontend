/* eslint-disable no-alert */
import { MdSave } from 'react-icons/md';
import { RiSave2Line } from 'react-icons/ri';
import { Button } from '../plugins';

const SaveButton = ({ value, isSaveBtnOn }) => {
    const onSave = () => {
        if (!isSaveBtnOn) {
            return alert("Can't save, limit crossed for top level element.");
        }

        const content = JSON.stringify(value);
        localStorage.setItem('content', content);
        return alert('Saved successfully');
    };

    return (
        <Button
            style={{ color: isSaveBtnOn ? '#28b728' : 'lightslategray' }}
            title="Save"
            // primary={false}
            onClick={() => onSave()}
        >
            {isSaveBtnOn ? <MdSave /> : <RiSave2Line />}
        </Button>
    );
};

export default SaveButton;
