import { Editor, Transforms, Range } from 'slate';
import liftNodes from './liftNodes';

const unindentItem = (editor) => {
    const { selection } = editor;

    // check that there is a current selection without highlight
    if (selection && Range.isCollapsed(selection)) {
        const [match] = Editor.nodes(editor, {
            match: (n) => n.type === 'list-item',
        });

        if (match) {
            // 'lift' the list-item to the next parent
            liftNodes(editor);
            // check for the new parent
            const [listMatch] = Editor.nodes(editor, {
                match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list',
            });
            // if it is no longer within a ul/ol, turn the element into a normal paragraph
            if (!listMatch) {
                Transforms.setNodes(
                    editor,
                    { type: 'paragraph' },
                    { match: (n) => n.type === 'list-item' }
                );
            }
        }
    }
};

export default unindentItem;
