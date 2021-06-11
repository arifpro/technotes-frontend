/* eslint-disable no-nested-ternary */
import { Editor, Element as SlateElement, Transforms } from 'slate';
import { LIST_TYPES } from '../../../data';
import { isBlockActive } from '../validation';

const toggleBlock = (editor, format) => {
    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);
    Transforms.unwrapNodes(editor, {
        match: (n) =>
            LIST_TYPES.includes(!Editor.isEditor(n) && SlateElement.isElement(n) && n.type),
        split: true,
    });
    const newProperties = {
        type: isActive ? 'paragraph' : isList ? 'list-item' : format,
    };
    Transforms.setNodes(editor, newProperties);
    if (!isActive && isList) {
        const block = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};

export default toggleBlock;
