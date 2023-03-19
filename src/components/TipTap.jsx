import './styles.css'
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ToolBar from './toolbar/ToolBar'
import FontFamily from '@tiptap/extension-font-family'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Gapcursor from '@tiptap/extension-gapcursor'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all highlight.js languages
import { lowlight } from 'lowlight'
import TextAlign from '@tiptap/extension-text-align'
import Image from '@tiptap/extension-image'
import CharacterCount from '@tiptap/extension-character-count'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'
import { useContext, useEffect, useState } from 'react'
import SidebarContext from '../context/SidebarContext'
import Link from '@tiptap/extension-link'
import { TextBold, TextItalic, TextStrikethrough } from '@carbon/icons-react'




lowlight.registerLanguage('html', html)
lowlight.registerLanguage('css', css)
lowlight.registerLanguage('js', js)
lowlight.registerLanguage('ts', ts)

const Tiptap = () => {

  const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext)

  const document = { "type": "doc", "content": [{ "type": "heading", "attrs": { "textAlign": "start", "level": 1 }, "content": [{ "type": "text", "marks": [{ "type": "bold" }], "text": "Funciones" }] }, { "type": "bulletList", "content": [{ "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Definimos una función con la palabra clave " }, { "type": "text", "marks": [{ "type": "code" }], "text": "function" }, { "type": "text", "text": "." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Indicamos un valor por defecto a un parámetro con " }, { "type": "text", "marks": [{ "type": "code" }], "text": "=" }, { "type": "text", "text": "." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Podemos crear una variable que contenga una string con el mismo nombre que una función, y ejecutarla usando " }, { "type": "text", "marks": [{ "type": "code" }], "text": "()" }, { "type": "text", "text": "." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Para acceder a una variable global, la declaramos con " }, { "type": "text", "marks": [{ "type": "code" }], "text": "global" }, { "type": "text", "text": "." }] }] }] }, { "type": "codeBlock", "attrs": { "language": "php" }, "content": [{ "type": "text", "text": "function nomFuncio($arg1, $arg2=30, $arg3=10) {\n    global $var1;\n    echo \" arg1=$arg1 arg2=$arg2 arg3=$arg3\";\n    $resp = $arg1 + $arg2 + $arg3 + $var1;\n    return $resp;\n}\n\n$var1 = 2;\n$var2 = 4;\necho \"<br>var1=$var1 var2=$var2 <br>\";\n$resp = nomFuncio($var1,$var2);\necho \" <br> $resp <br>\";\n\n$funcioExecutar = \"nomFuncio\";\n$resp = $funcioExecutar(1,2,3); // la variable con () ejecuta la función con el mismo nombre que su valor\necho \" <br> $resp <br>\";\n" }] }, { "type": "heading", "attrs": { "textAlign": "start", "level": 1 }, "content": [{ "type": "text", "marks": [{ "type": "bold" }], "text": "Conexión con BBDD" }] }, { "type": "bulletList", "content": [{ "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Usando mysqli creamos un objeto para mantener la conexión." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Con el método " }, { "type": "text", "marks": [{ "type": "code" }], "text": "query()" }, { "type": "text", "text": " ejecutamos un " }, { "type": "text", "marks": [{ "type": "code" }], "text": "SELECT" }, { "type": "text", "text": ", " }, { "type": "text", "marks": [{ "type": "code" }], "text": "INSERT" }, { "type": "text", "text": ", " }, { "type": "text", "marks": [{ "type": "code" }], "text": "UPDATE" }, { "type": "text", "text": ", o " }, { "type": "text", "marks": [{ "type": "code" }], "text": "DELETE" }, { "type": "text", "text": "." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Si es un " }, { "type": "text", "marks": [{ "type": "code" }], "text": "INSERT" }, { "type": "text", "text": ", " }, { "type": "text", "marks": [{ "type": "code" }], "text": "UPDATE" }, { "type": "text", "text": ", o " }, { "type": "text", "marks": [{ "type": "code" }], "text": "DELETE" }, { "type": "text", "text": " obtenemos " }, { "type": "text", "marks": [{ "type": "code" }], "text": "true" }, { "type": "text", "text": " o " }, { "type": "text", "marks": [{ "type": "code" }], "text": "false" }, { "type": "text", "text": "." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Si es un " }, { "type": "text", "marks": [{ "type": "code" }], "text": "SELECT" }, { "type": "text", "text": ", obtenemos una lista de resultados que podemos recorrer con un bucle." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Más información en " }, { "type": "text", "marks": [{ "type": "bold" }], "text": "php.net" }, { "type": "text", "text": " y " }, { "type": "text", "marks": [{ "type": "bold" }], "text": "w3schools.com" }] }, { "type": "paragraph", "attrs": { "textAlign": "left" } }] }] }, { "type": "codeBlock", "attrs": { "language": "php" }, "content": [{ "type": "text", "text": "$mysqli = new mysqli(\"localhost\",\"user_db\",\"password_db\",\"nom_db\");\nif ($mysqli -> connect_errno) {\n    echo \"Failed to connect to MySQL: \" . $mysqli -> connect_error;\n    exit();\n} else{\n    header(\"Location: incorrecte.php\"); // si queremos redirigir\n}\n\n$sql = \"SELECT nom FROM Persones ORDER BY cognom\";\n$result = $mysqli -> query($sql); // ejecutamos la consulta\nwhile ($row = $result->fetch_assoc()) { // si es un SELECT, recorremos los resultados\n    echo $row[\"Lastname\"];\n}\n\n// Otras propiedades interesantes\necho \"numero de resultats:\". $result->num_rows; // numero de respuestas\n// echo \"id generat per insert:\". $mysqli->insert_id ; // último valor autogenerado\n$result->free_result(); // liberamos los resultados\n$mysqli->close(); // cerramos la conexión\n" }] }, { "type": "paragraph", "attrs": { "textAlign": "left" } }, { "type": "heading", "attrs": { "textAlign": "start", "level": 1 }, "content": [{ "type": "text", "marks": [{ "type": "bold" }], "text": "INCLUDE y REQUIRE" }] }, { "type": "bulletList", "content": [{ "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "text": "Para insertar el contenido de un documento (" }, { "type": "text", "marks": [{ "type": "code" }], "text": "header_local.php" }, { "type": "text", "text": ") en un punto de nuestro código, podemos usar las instrucciones " }, { "type": "text", "marks": [{ "type": "code" }], "text": "require" }, { "type": "text", "text": " o " }, { "type": "text", "marks": [{ "type": "code" }], "text": "include" }, { "type": "text", "text": " y sus variantes " }, { "type": "text", "marks": [{ "type": "code" }], "text": "require_once" }, { "type": "text", "text": " e " }, { "type": "text", "marks": [{ "type": "code" }], "text": "include_once" }, { "type": "text", "text": "." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "marks": [{ "type": "code" }], "text": "INCLUDE" }, { "type": "text", "text": " intenta insertar el código contenido en otro archivo. Si contiene algún error, sólo muestra un warning." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "marks": [{ "type": "code" }], "text": "REQUIRE" }, { "type": "text", "text": " intenta insertar el código contenido en otro archivo. Si contiene algún error, se detiene la ejecución del PHP con un error." }] }] }, { "type": "listItem", "attrs": { "color": "" }, "content": [{ "type": "paragraph", "attrs": { "textAlign": "left" }, "content": [{ "type": "text", "marks": [{ "type": "code" }], "text": "INCLUDE/REQUIRE_ONCE" }, { "type": "text", "text": " evitan que se cargue de nuevo un archivo." }] }] }] }, { "type": "codeBlock", "attrs": { "language": "php" }, "content": [{ "type": "text", "text": "<body>\n  <header>\n    <?php\n      if(strcmp($_SESSION['type_user'], 'local')==0){\n        require_once './header_local.php';\n      }else{\n        require_once './header_general.php';\n      }\n    ?>\n  </header>\n  <h1>\n    BENVINGUT AL LOCAL <?php echo $_GET['nom']; ?>\n  </h1>\n  <h1> BENVINGUT A LA WEB! </h1>\n</body>" }] }, { "type": "paragraph", "attrs": { "textAlign": "left" } }] }

  const editor = useEditor({
    extensions: [
      Document,
      Link.configure({
        validate: href => /^https?:\/\//.test(href),
        HTMLAttributes: {
          class: 'a-link-editor',
        },
        protocols: ['ftp', 'mailto'],
      }),
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      CodeBlockLowlight.configure({
        languageClassPrefix: 'language-',
        lowlight,
      }),
      Gapcursor,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      FontFamily,
      Image,
      TextStyle.configure({ types: [ListItem.name] }),
      CharacterCount.configure({
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),

    ],
    content: document,
    onUpdate: ({ editor }) => {
      const json = editor.getJSON()
      // send the content to an API here
      console.log(JSON.stringify(json))
    },

  })


  const saveJson = () => {
    const json = editor.getJSON();

    console.log(JSON.stringify(json))
  };

  const handleSelection = () => {
    const { view, state } = editor;
    const { from, to } = view.state.selection;
    const selectedText = state.doc.textBetween(from, to, '');
    // Hacer algo con el texto seleccionado

    console.log(selectedText)
  }



  return (
    <>
      <div className='flex justify-center'>

        <ToolBar editor={editor} />
      </div>
      <div className='grid justify-center min-w-[20rem] max-w-6xl mx-auto'>
        <div className='max-w-5xl w-full min-w-[20rem] lg:min-w-[60rem] mx-auto mt-40 sm:mt-20 md:mt-4'>
          {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100}}>
            <div className=' bg-white  items-center rounded-md shadow-xl'>
              <button
                //Aqui se puede poner el texto seleccionado y llamar api chat gpt
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'btn-active' : 'btn-toolbar'}
              >
                <TextBold />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'btn-active' : 'btn-toolbar'}
              >
                <TextItalic />
              </button>
              <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'btn-active' : 'btn-toolbar'}
              >
                <TextStrikethrough />
              </button>
            </div>
          </BubbleMenu>}
          <EditorContent editor={editor} />
        </div>
        <button onClick={saveJson}>save json</button>
        <button onClick={handleSelection}>save text</button>
      </div>

    </>
  )
}

export default Tiptap