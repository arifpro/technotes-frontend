import { Editor, Transforms, Range } from 'slate';

const defaultMax = 2;

const indentItem = (editor, maxDepth = defaultMax) => {
    const { selection } = editor;

    // check that there is a current selection without highlight
    if (selection && Range.isCollapsed(selection)) {
        const [match] = Editor.nodes(editor, {
            match: (n) => n.type === 'list-item',
        });

        // check that there was a match
        if (match) {
            // wrap the list item into another list to indent it within the DOM
            const [listMatch] = Editor.nodes(editor, {
                mode: 'lowest',
                match: (n) => n.type === 'bulleted-list',
            });
            if (listMatch) {
                const depth = listMatch[1].length;
                if (depth <= maxDepth) {
                    const listType = listMatch ? 'bulleted-list' : 'numbered-list';
                    Transforms.wrapNodes(editor, { type: listType, children: [] });
                }
            }
        }
    }
};

export default indentItem;
