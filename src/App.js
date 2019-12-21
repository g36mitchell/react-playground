import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages.js';
import TheDate from './state/TheDate.js';
import Counter from './state/Counter.js';

const firstTooltip = (
    <Tooltip color='hotpink' message='tooltip message' >
        ipsum hermanus parvus
    </Tooltip>
);

const secondTooltip = (
  <Tooltip color='#126BCC' message='another tooltip message' >
      lorem officiis
  </Tooltip>
);

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter step={10} />
      <Split className='left' flexBasis={2}>
      This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
        {/* make another tooltip directly inside the App */}
        <Tooltip message='one more tooltip message'>
          Necessitatibus?<Messages name="Messages" unread={0}/>
        </Tooltip>
      </Split>
      <Split className='right'>
        This is the content  <Messages name="Notifications" unread={10}/> for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>    
  );
}

export default App;