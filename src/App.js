import Editor from './components/Editor'
import Preview from './components/Preview'
import { useState } from 'react';
import './App.scss';

const defaultMarkdownText = `
# Heading 1 
## Heading 2 
#### Heading 4 
**Bold**

\`Code\`

\`\`\`
function myCode(){
    var a = 5;
}
\`\`\`

1. List Item 1
2. List Item 2
3. List Item 3

(Using *)

* List Item 1
* List Item 2
* List Item 3

(Using -)

- List Item 1
- List Item 2
- List Item 3

> Blockquote

1. OL item 1
   * UL Item 1.1
   * UL Item 1.2
   * UL Item 1.3
2. OL item 2
   * UL Item 2.1
   * UL Item 2.2

![alt_text](https://upload.wikimedia.org/wikipedia/commons/6/62/INSTEAD-Logo-small.png)
	[title](https://example.com)`

function App() {

  const [markdownText, setMarkdownText] = useState(defaultMarkdownText)

  return (
    <div className="App">
      <Editor defaultText={defaultMarkdownText} onEditorChange={setMarkdownText}/>
      <Preview content={markdownText} />
    </div>
  );
}

export default App;
