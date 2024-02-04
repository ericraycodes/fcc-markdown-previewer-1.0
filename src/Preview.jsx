

export default function Preview({ preview }) {
    window.console.log('<Preview /> RENDERING...');
    return (
        <div
          id='preview'
          role='document'
          dangerouslySetInnerHTML={{__html: preview }}
        />
    );
}