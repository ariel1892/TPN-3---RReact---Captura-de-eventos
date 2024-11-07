//Ariel Ludovino 7°2da
import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');

  const countVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of text) {
      if (vowels.includes(char)) {
        count++;
      }
    }
    return count;
  };

  const handleButtonClick = () => {
    const vowelCount = countVowels(inputText);
    alert(`Cantidad de vocales: ${vowelCount}`);
  };
//Ariel Ludovino 7°2da
  return (
    <div style={{ padding: '20px' }}>
      <h2>Contador de Vocales</h2>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Escribe aquí..."
      />
      <button onClick={handleButtonClick} style={{ marginLeft: '10px' }}>
        Contar Vocales
      </button>
    </div>
  );
}

export default App;
//Ariel Ludovino 7°2da