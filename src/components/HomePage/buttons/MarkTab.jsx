import { useSlate } from 'slate-react';
import { Button } from '../plugins';
import { toggleMark } from '../helper';
import { isMarkActive } from '../validation';

const MarkTab = ({ format, icon, setSelectedText }) => {
    const editor = useSlate();

    return (
        <Button
            title={format}
            active={isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault();

                setSelectedText({ editor, format });
                toggleMark(editor, format);
            }}
        >
            {icon}
        </Button>
    );
};

export default MarkTab;
