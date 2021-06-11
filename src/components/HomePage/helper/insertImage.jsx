import { Transforms } from 'slate';

const insertImage = (editor, url) => {
    const text = { text: '' };
    const image = { type: 'image', url, children: [text] };
    Transforms.insertNodes(editor, image);
};

export default insertImage;
