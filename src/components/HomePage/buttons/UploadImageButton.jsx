import { useEffect, useState } from 'react';
import { MdCloudUpload } from 'react-icons/md';
import { useSlateStatic } from 'slate-react';
import { Button } from '../plugins';
import { insertImage } from '../helper';

// eslint-disable-next-line arrow-body-style
const UploadImageButton = () => {
    const editor = useSlateStatic();
    const [file, setFile] = useState();

    const handleChange = (files) => {
        console.log(files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = () => setFile(reader.result);
        reader.onerror = (error) => console.log('Error: ', error);
    };

    useEffect(() => {
        if (file) {
            insertImage(editor, file);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    return (
        <div
            title="Upload Image"
            style={{
                position: 'relative',
                display: 'inline-block',
            }}
        >
            <span>
                <Button>
                    <MdCloudUpload />
                </Button>
            </span>
            <input
                type="file"
                name="imgUpload"
                accept="image/*"
                onChange={(e) => handleChange(e.target.files)}
                style={{
                    // '-webkit-appearance': 'none',
                    WebkitAppearance: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    opacity: 0,
                    height: 0,
                    width: '16px',
                }}
            />
        </div>
    );
};

export default UploadImageButton;
