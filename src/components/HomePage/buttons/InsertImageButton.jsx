import { MdImage } from 'react-icons/md';
import { useSlateStatic } from 'slate-react';
import { Button } from '../plugins';
import { insertImage } from '../helper';
import { isImageUrl } from '../validation';

const InsertImageButton = () => {
    const editor = useSlateStatic();
    return (
        <Button
            title="Image Link"
            onMouseDown={(event) => {
                event.preventDefault();
                // eslint-disable-next-line no-alert
                const url = window.prompt('Enter the URL of the image:');
                if (url && !isImageUrl(url)) {
                    // eslint-disable-next-line no-alert
                    alert('URL is not an image');
                    return;
                }
                if (url) {
                    insertImage(editor, url);
                }
            }}
        >
            <MdImage />
        </Button>
    );
};

export default InsertImageButton;
