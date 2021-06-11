/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-restricted-syntax */
import isHotkey from 'is-hotkey';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    MdCode,
    MdFormatBold,
    MdFormatIndentIncrease,
    MdFormatItalic,
    MdFormatListBulleted,
    MdFormatListNumbered,
    MdFormatQuote,
    MdFormatUnderlined,
    MdLooksOne,
    MdLooksTwo,
} from 'react-icons/md';
import { createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { HOTKEYS, initialValue } from '../../data';
import BlockCount from './BlockCount';
import {
    BlockButton,
    CancelButton,
    InsertImageButton,
    MarkButton,
    MarkTab,
    SaveButton,
    UploadImageButton,
} from './buttons';
import {
    getExistingValue,
    indentItem,
    toggleMark,
    unindentItem,
    withImages,
    withLists,
    withMarkdown,
} from './helper';
import { Element, Leaf, Toolbar } from './plugins';

const CustomSlateEditor = () => {
    const [value, setValue] = useState(getExistingValue() || initialValue);
    const textArea = useRef();
    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
    // const editor = useMemo(() => withImages(withHistory(withReact(createEditor()))), []);
    const editor = useMemo(
        () => withLists(withMarkdown(withImages(withHistory(withReact(createEditor()))))),
        []
    );
    const [selectedText, setSelectedText] = useState({});
    const [isSaveBtnOn, setIsSaveBtnOn] = useState(true);

    return (
        <Slate editor={editor} refs={textArea} value={value} onChange={(v) => setValue(v)}>
            <Toolbar style={{ padding: '1rem', margin: 0 }}>
                <MarkButton format="bold" icon={<MdFormatBold />} />
                <MarkButton format="italic" icon={<MdFormatItalic />} />
                <MarkButton format="underline" icon={<MdFormatUnderlined />} />
                <MarkButton format="code" icon={<MdCode />} />
                <BlockButton format="heading-one" icon={<MdLooksOne />} />
                <BlockButton format="heading-two" icon={<MdLooksTwo />} />
                <BlockButton format="block-quote" icon={<MdFormatQuote />} />
                <BlockButton format="bulleted-list" icon={<MdFormatListBulleted />} />
                <BlockButton format="numbered-list" icon={<MdFormatListNumbered />} />
                <InsertImageButton />
                <UploadImageButton />
                <MarkTab
                    format="indent"
                    icon={<MdFormatIndentIncrease />}
                    setSelectedText={setSelectedText}
                />
                <SaveButton value={value} isSaveBtnOn={isSaveBtnOn} />
                <CancelButton setValue={setValue} />
            </Toolbar>
            <Editable
                style={{ padding: '0.5rem 1rem' }}
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                refs={textArea}
                placeholder="Enter some text…"
                spellCheck
                autoFocus
                onKeyDown={(e) => {
                    for (const hotkey in HOTKEYS) {
                        if (isHotkey(hotkey, e)) {
                            e.preventDefault();
                            const mark = HOTKEYS[hotkey];
                            toggleMark(editor, mark);
                        }
                    }

                    if (isHotkey('shift+tab', e)) {
                        // un-indent list
                        e.preventDefault();
                        unindentItem(editor);
                    } else if (isHotkey('tab', e)) {
                        // indent list
                        e.preventDefault();
                        indentItem(editor);
                    }
                }}
            />
            <BlockCount blockLimitation={null} setIsSaveBtnOn={setIsSaveBtnOn} />
        </Slate>
    );
};

export default CustomSlateEditor;
