
import { useState } from 'react';
// import { marked } from './https://cdnjs.cloudflare.com/ajax/libs/marked/11.2.0/marked.min.js';
import Editor from './Editor';

/**
 * 1. Controlled input: React's state management will maintain the text input from the #editor.
 * 2. This needs state management. The input changes are state changes. And state is shared by
 *    both the #editor and the #preview component.
 * 
 * @returns A markdown preview of a text input.
 */

function App() {

  // This will store the user-input in the #editor.
  const [editorInput, setEditorInput] = useState('');

  // This will handle user-text-input to be stored into React.
  const onEditorInput = (event) => {
    setEditorInput(event.target.value);
    // window.console.log('\t<App/> react #editor:', editorInput);
  };

  // marked.js
  // marked.use({
  //   async: false,
  //   gfm: true
  // });
  const preview = marked.parse(editorInput, [
    {gfm: true}
  ]);

  window.console.log('<App /> RENDERING...');
  return (
    <>
    <header>Markdown Previewer</header>
    <main>
      <div>
        <div>
          <label htmlFor='editor'>Editor</label>
          <button className='resize-button' aria-label='resize button.'>+ / -</button>
        </div>
        <Editor value={editorInput} onEditorInput={onEditorInput} />
      </div>
      <div>
        <div>
          <label htmlFor='preview'>Previewer</label>
          <button className='resize-button' aria-label='resize button.'>+ / -</button>
        </div>
        <div
          id='preview'
          role='document'
          style={{width:'80%'}}
          dangerouslySetInnerHTML={{__html: preview }}
        />
      </div>
    </main>
    <footer>
      <p>
        This is for freeCodeCamp purposes only. By Eric Ray Saladar. 2024.
      </p>
    </footer>
    </>
  )
}

export default App;
