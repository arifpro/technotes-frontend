import imageExtensions from 'image-extensions';
import isUrl from 'is-url';

const isImageUrl = (url) => {
    if (!url) return false;
    if (!isUrl(url)) return false;
    const ext = new URL(url).pathname.split('.').pop();
    return imageExtensions.includes(ext);
};

export default isImageUrl;
