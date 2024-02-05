
import { useEffect } from 'react';


export default function Editor({ value, onEditorInput }) {

  // This loads a pre-emptive input to the #editor at page load.
  useEffect(() => {
    onEditorInput(initialInput);
  }, []);


  // This will handle the #editor's user text-input.
  const handleOnChange = (event) => {
    // This will stop the event bubbling phase.
    event.stopPropagation();
    onEditorInput(event.target.value);
    const editor = document.getElementById('editor').value;
  };


  window.console.log('<Editor /> RENDERING...');

  return (
    <div className='io'>
    <textarea
      id='editor'
      value={value}
      onChange={handleOnChange}
      placeholder='This is a placeholder. This is the textarea. The #editor.'
    >
    </textarea>
    </div>
  );
}




// Initial #editor text value on page load.
const initialInput = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;