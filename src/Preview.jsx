

export default function Preview({ preview }) {
    window.console.log('<Preview /> RENDERING...');
    return (
        <div
          id='preview'
          className='io'
          role='document'
          dangerouslySetInnerHTML={{__html: preview }}
        />
    );
}