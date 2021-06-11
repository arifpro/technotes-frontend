/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-param-reassign */
const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.code) {
        children = <code>{children}</code>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    if (leaf.indent) {
        children = (
            <p style={{ display: 'inline-block', margin: 0 }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {children}
            </p>
        );
    }
    return <span {...attributes}>{children}</span>;
};

export default Leaf;
