

function App() {


  window.console.log('<App /> RENDERING...')

  return (
    <>
    <header>Markdown Previewer</header>
    <main>
    <div>
      <div>
        <label for='editor'>Editor</label>
        <button className='resize-button' aria-label='resize button.'>+ / -</button>
      </div>
      <textarea id='editor' defaultValue={'This is the textarea #editor'}></textarea>
    </div>
    <div>
      <div>
        <label for='preview'>Previewer</label>
        <button className='resize-button' aria-label='resize button.'>+ / -</button>
      </div>
      <div id='preview'>
        <p>
          This is an arbitrary element holding the preview functionality of the app.
        </p>
      </div>
    </div>
    </main>
    </>
  )
}

export default App;
