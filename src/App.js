import { useState } from 'react';
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import './styles/style.css';

//  recoil atoms
const textState = atom({
  key: "textState",
  default: "Click the button above."
});

//  recoil selectors
const textCopyState = selector({
  key: "textCopyState",
  get: ({get}) => get(textState)
});

// texts
const texts = [
  "text 1",
  "text 2",
  "text 3",
  "text 4",
  "text 5",
  "text 6",
  "text 7",
  "text 8",
  "text 9",
  "text 10"
];

function App() {
  // states
  const [ text, setText ] = useRecoilState( textState );
  const textCopy = useRecoilValue( textCopyState );

  const [ show, setShow ] = useState(false);

  // functions
  function changeText() {
    const new_text = texts[Math.floor( Math.random() * texts.length )]; // gets a random text from "texts" array
    setText( new_text ); // the "text" state becomes the random text
  }

  function hideText() {
    setShow(false);
  }

  function showRight() {
    setShow(true);
  }

  return (
    <div className="App">
      <h1 className="header">Text Changer w/ Recoil JS</h1>

      <div className="buttons">
        <button
          onClick={ changeText }
        >
          Show random text
        </button>


        <button
          onClick={ useResetRecoilState(textState) } /* resets text to default value */
        >
          Reset
        </button>
      </div>

      <div className="containers">
        <div className='text-container'>
          <p>
            { text }
          </p>

          <button
            onClick={ showRight }
          >
            Show right
          </button>
        </div>

        <div className='text-container'>
          <p>{ show && textCopy }</p>

          { show && <button onClick={ hideText }>Hide text</button>}
        </div>
      </div>

    </div>
  );
}

export default App;
