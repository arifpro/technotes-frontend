import { useSlate } from 'slate-react';
import { Button } from '../plugins';
import { toggleMark } from '../helper';
import { isMarkActive } from '../validation';

const MarkButton = ({ format, icon }) => {
    const editor = useSlate();

    return (
        <Button
            title={format}
            active={isMarkActive(editor, format)}
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
        >
            {icon}
        </Button>
    );
};

export default MarkButton;
