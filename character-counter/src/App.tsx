import React from 'react';
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter';

function App() {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Lab 2: Character Counter App</h1>
      <CharacterCounter minWords={25} maxWords={100} targetReadingTime={5} />
    </div>
  );
}

export default App;
