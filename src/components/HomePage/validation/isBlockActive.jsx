import { Editor, Element as SlateElement } from 'slate';

const isBlockActive = (editor, format) => {
    const [match] = Editor.nodes(editor, {
        match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
    });
    return !!match;
};

export default isBlockActive;
