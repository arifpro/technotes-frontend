/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { useEffect } from 'react';
import { Node } from 'slate';
import { useSlate } from 'slate-react';

const BlockCount = ({ blockLimitation, setIsSaveBtnOn }) => {
    const editor = useSlate();
    const blockLimit = blockLimitation || 'unlimited';
    let blockCount = 0;

    if (editor.children.length === 1) {
        if (editor.children[0].children[0].text === '') {
            blockCount = 0;
        } else {
            blockCount = 1;
        }
    } else if (editor.children.length > 1) {
        blockCount = editor.children.length;
    }

    useEffect(() => {
        if (blockLimit === 'unlimited') {
            setIsSaveBtnOn(true);
        } else if (blockLimit <= blockCount) {
            setIsSaveBtnOn(false);
        } else {
            setIsSaveBtnOn(true);
        }
    }, [blockCount, blockLimit, setIsSaveBtnOn]);

    return (
        <div
            style={{
                background: '#cccccc',
                margin: '0.3rem',
                padding: '0.5rem 0',
                borderRadius: '25px',
                display: 'flex',
                justifyContent: 'space-evenly',
                fontFamily: 'monospace',
            }}
        >
            <p>
                <strong>Top level Blocks:</strong> {blockCount}
            </p>
            <p>
                <strong>Limit:</strong> {blockLimit}
            </p>
        </div>
    );
};

export default BlockCount;
