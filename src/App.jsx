
import { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';

/**
 * 1. Controlled input: React's state management will maintain the text input from the #editor.
 * 2. This needs state management. The input changes are state changes. And state is shared by
 *    both the #editor and the #preview component.
 * 3. #preview functionality: <code> markdown on highlights - not yet done.
 * 
 * @returns A markdown preview of a text input.
 */

function App() {


  // This will store the user-input in the #editor.
  const [editorInput, setEditorInput] = useState('');


  // This will handle user-text-input to be stored into React.
  const onEditorInput = (text) => {
    setEditorInput(text);
  };


  // This is the parsed input into markdown.
  // const preview = marked.parse(editorInput, [
  //   {
  //     gfm: true,
  //     breaks: true
  //   }
  // ]);
  marked.use({
    pedantic: false,
    gfm: true,
    breaks: true,
  });
  const preview = marked.parse(editorInput);


  // This will tell that the component is rendering.
  window.console.log('<App /> RENDERING...');

  return (
    <>
    <header>
      <h1>Markdown Previewer</h1>
    </header>
    <main className='editor-preview-box'>
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

        <Preview preview={preview} />

      </div>
    </main>
    </>
  )
}

export default App;

