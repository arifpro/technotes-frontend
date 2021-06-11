/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { css, cx } from '@emotion/css';
import { forwardRef } from 'react';

const Button = forwardRef(({ className, active, reversed, ...props }, ref) => (
    <span
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                cursor: pointer;
                color: ${reversed ? (active ? 'white' : '#aaa') : active ? 'black' : '#ccc'};
            `
        )}
    />
));

export default Button;
