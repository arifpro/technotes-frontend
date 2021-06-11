/* eslint-disable react/jsx-props-no-spreading */
import { css, cx } from '@emotion/css';
import { forwardRef } from 'react';

const Toolbar = forwardRef(({ className, ...props }, ref) => (
    <Menu
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                position: relative;
                padding: 1px 18px 17px;
                margin: 0 -20px;
                border-bottom: 2px solid #eee;
                margin-bottom: 20px;
            `
        )}
    />
));

const Menu = forwardRef(({ className, ...props }, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                & > * {
                    display: inline-block;
                    margin-right: 15px;
                }

                & > * + * {
                    // margin-right: 15px;
                }
            `
        )}
    />
));

export default Toolbar;
