

function App() {


  window.console.log('<App /> RENDERING...')

  return (
    <>
    <div>
      <textarea id='editor' defaultValue={'This is the textarea #editor'}></textarea>
      <div id='preview'></div>
    </div>
    </>
  )
}

export default App;
