import { Code, Image, Link, ListBoxes, ListBulleted, ListNumbered, Paragraph, Parameter, QueryQueue, Quotes, Reset, Restart, SubtractAlt, TextAlignCenter, TextAlignJustify, TextAlignLeft, TextAlignRight, TextBold, TextClearFormat, TextItalic, TextNewLine, TextStrikethrough, Unlink } from '@carbon/icons-react'
import React, { useCallback, useState } from 'react'
import SelectFont from './selects/SelectFont'

const ToolBar = ({ editor }) => {
    if (!editor) {
        return null
    }

    const [color, setColor] = useState('#000000'); // Inicializamos el estado con un color por defecto

    const handleChange = (event) => {
        const newColor = event.target.value;
        setColor(newColor);
        editor.chain().focus().setColor(newColor).run(); // Actualizamos el color en el editor
    }

    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])


    const setLink = useCallback(() => {
        const previousUrl = editor.getAttributes('link').href
        const url = window.prompt('URL', previousUrl)

        // cancelled
        if (url === null) {
            return
        }

        // empty
        if (url === '') {
            editor.chain().focus().extendMarkRange('link').unsetLink().run()
            return
        }

        // update link
        editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }, [editor])

    return (
        <div className='flex justify-center mt-4 fixed  top-8 z-50 mx-auto'>
            <div className='toolbar px-4 py-2 flex items-center bg-white justify-center gap-1 w-full flex-wrap'>
                <button onClick={setLink} className={editor.isActive('link') ? 'btn-active' : 'btn-toolbar'}>
                    <Link />
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    disabled={!editor.isActive('link')}
                    className='btn-toolbar'
                >
                    <Unlink />
                </button>
                <SelectFont editor={editor} />
                <button
                    onClick={() => editor.chain().focus().toggleTaskList().run()}
                    className={editor.isActive('taskList') ? 'btn-active' : 'btn-toolbar'}
                >
                    <ListBoxes />
                </button>
                <button
                    className='btn-toolbar'
                    onClick={() => editor.chain().focus().sinkListItem('taskItem').run()}
                    disabled={!editor.can().sinkListItem('taskItem')}
                >
                    <QueryQueue />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleBold()
                            .run()
                    }
                    className={editor.isActive('bold') ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={editor.isActive('italic') ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={editor.isActive('strike') ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextStrikethrough />
                </button>
                <div className="border-l h-4 border-gray-200 border-1"></div>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <p className='font-bold text-xs'>H1</p>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <p className='font-bold text-xs'>H2</p>

                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <p className='font-bold text-xs'>H3</p>
                </button>
                <div className="border-l h-4 border-gray-200 border-1"></div>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleCode()
                            .run()
                    }
                    className={editor.isActive('code') ? 'btn-active' : 'btn-toolbar'}
                >
                    <Code />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={editor.isActive('codeBlock') ? 'btn-active' : 'btn-toolbar'}
                >
                    <Parameter />
                </button>
                <div className="border-l h-4 border-gray-200 border-1"></div>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextAlignLeft />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextAlignCenter />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextAlignRight />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                    className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <TextAlignJustify />
                </button>
                <div className="border-l h-4 border-gray-200 border-1"></div>
                <button
                    className='btn-toolbar'
                    onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                    <TextClearFormat />
                </button>
                <button
                    className='btn-toolbar'
                    onClick={() => editor.chain().focus().clearNodes().run()}>
                    <SubtractAlt />
                </button>
                {/* <button
                    className={editor.isActive('paragraph') ? 'btn-active' : ''}
                    onClick={() => editor.chain().focus().setParagraph().run()}
                >
                    <Paragraph />
                </button> */}
                <div className="border-l h-4 border-gray-200 border-1"></div>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'btn-active' : 'btn-toolbar'}
                >
                    <ListBulleted />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'btn-active' : 'btn-toolbar'}
                >
                    <ListNumbered />
                </button>

                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'btn-active' : 'btn-toolbar'}
                >
                    <Quotes />
                </button>
                <button className='btn-toolbar' onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                    <p className='font-bold text-xs'>HR</p>
                </button>
                <button className='btn-toolbar' onClick={() => editor.chain().focus().setHardBreak().run()}>
                    <TextNewLine />
                </button>
                <input
                    id='style1'
                    type="color"
                    onInput={handleChange}
                    value={color}
                />
                <div className="border-l h-4 border-gray-200 border-1"></div>
                <button
                    className='btn-toolbar'
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .undo()
                            .run()
                    }
                >
                    <Reset />
                </button>
                <button
                    className='btn-toolbar'
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .redo()
                            .run()
                    }
                >
                    <Restart />
                </button>
                <button
                    className='btn-toolbar'
                    onClick={addImage}>
                    <Image />
                </button>
                <div className="character-count flex gap-2 text-xs p-2 justify-end text-gray-400">
                    <div>
                        {editor.storage.characterCount.characters()} characters
                    </div>
                    <div>

                        {editor.storage.characterCount.words()} words
                    </div>
                </div>
                {/* <button
                    onClick={() => editor.chain().focus().setColor('#958DF1').run()}
                    className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'btn-active' : 'btn-toolbar'}
                >
                    <p className='font-bold text-xs'>PURPLE</p>

                </button> */}

                {/* <button
                    onClick={() => editor.chain().focus().setCodeBlock().run()}
                    disabled={editor.isActive('codeBlock')}
                >
                    setCodeBlock
                </button> */}
            </div>
        </div>
    )
}

export default ToolBar