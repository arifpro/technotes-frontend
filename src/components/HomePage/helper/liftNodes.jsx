import { Editor, Transforms } from 'slate';

const liftNodes = (editor) => {
    // check for the new parent
    const [listMatch] = Editor.nodes(editor, {
        match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list',
    });
    console.log(listMatch);
    // verify there is a list to lift the nodes
    if (listMatch) {
        // 'lift' the list-item to the next parent
        Transforms.liftNodes(editor, { match: (n) => n.type === 'list-item' });
    }
};

export default liftNodes;
