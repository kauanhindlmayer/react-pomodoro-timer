import React from 'react';
import { PomodoroTimer } from './components/pomodoro_timer';

function App() {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTime={300} />
    </div>
  );
}

export default App;
