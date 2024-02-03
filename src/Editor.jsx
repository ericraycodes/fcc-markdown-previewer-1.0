/**
 * 
 */

export default function Editor({ value, onEditorInput }) {

  // This will handle the #editor's user text-input.
  const handleOnChange = (event) => {
    // This will stop the event bubbling phase.
    event.stopPropagation();
    onEditorInput(event);
    const editor = document.getElementById('editor').value;
    // window.console.log('\t<Editor/> dom #editor:', editor)
  };

  window.console.log('<Editor /> RENDERING...')
  return (
    <textarea
      id='editor'
      value={value}
      onChange={handleOnChange}
      placeholder='This is a placeholder. This is the textarea. The #editor.'
      rows={10}
      cols={50}
    >
    </textarea>
  );
}