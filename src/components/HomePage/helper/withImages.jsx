/* eslint-disable no-loop-func */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */

import { isImageUrl } from '../validation';
import insertImage from './insertImage';

const withImages = (editor) => {
    const { insertData, isVoid } = editor;
    editor.isVoid = (element) => (element.type === 'image' ? true : isVoid(element));
    editor.insertData = (data) => {
        const text = data.getData('text/plain');
        const { files } = data;
        if (files && files.length > 0) {
            for (const file of files) {
                const reader = new FileReader();
                const [mime] = file.type.split('/');
                if (mime === 'image') {
                    reader.addEventListener('load', () => {
                        const url = reader.result;
                        insertImage(editor, url);
                    });
                    reader.readAsDataURL(file);
                }
            }
        } else if (isImageUrl(text)) {
            insertImage(editor, text);
        } else {
            insertData(data);
        }
    };
    return editor;
};

export default withImages;
