/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
import { css } from '@emotion/css';
import { useFocused, useSelected } from 'slate-react';

const Image = ({ attributes, children, element }) => {
    const selected = useSelected();
    const focused = useFocused();
    return (
        <div {...attributes}>
            <div contentEditable={false}>
                <img
                    src={element.url}
                    className={css`
                        display: block;
                        max-width: 100%;
                        max-height: 20em;
                        box-shadow: ${selected && focused ? '0 0 0 3px #B4D5FF' : 'none'};
                    `}
                />
            </div>
            {children}
        </div>
    );
};

export default Image;
