import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  // Хендлер для відправки запитання
  const handleAskQuestion = async () => {
    try {
      const res = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }),
      });
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      console.error('Упс, щось пішло не так!', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI-Enhanced Document QA System 🤖</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Спробуй задати запитання"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleAskQuestion} style={{ padding: '10px' }}>
        Запитати
      </button>
      <p style={{ marginTop: '20px' }}>Відповідь: {response}</p>
    </div>
  );
}

export default App;
