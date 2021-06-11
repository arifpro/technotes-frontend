const initialValue = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is editable ' },
            { text: 'rich', bold: true },
            { text: ' text, ' },
            { text: 'much', italic: true },
            { text: ' better than a ' },
            { text: '<textarea>', code: true },
            { text: '! ' },
            {
                text: 'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.',
            },
        ],
    },
    {
        type: 'paragraph',
        children: [
            {
                text: "Since it's rich text, you can do things like turn a selection of text ",
            },
            { text: 'bold', bold: true },
            {
                text: ', or add a semantically rendered block quote in the middle of the page, like this:',
            },
        ],
    },
    {
        type: 'block-quote',
        children: [{ text: 'A wise quote.' }],
    },
    {
        type: 'paragraph',
        children: [{ text: 'Try it out for yourself!' }],
    },
    {
        type: 'image',
        url: 'https://source.unsplash.com/kFrdX5IeQzI',
        children: [{ text: '' }],
    },
    {
        type: 'paragraph',
        children: [
            {
                text: 'This example shows images in action. It features two ways to add images. You can either add an image via the toolbar icon above or if you want in on a little secret, copy an image URL to your clipboard and paste it anywhere in the editor!',
            },
        ],
    },
];

const HOTKEYS = {
    'mod+b': 'bold',
    'mod+i': 'italic',
    'mod+u': 'underline',
    'mod+`': 'code',
    'mod+t': 'indent',
};

const LIST_TYPES = ['numbered-list', 'bulleted-list'];

export { initialValue, HOTKEYS, LIST_TYPES };
