import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

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
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI-Enhanced Document QA System 🤖</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button onClick={handleAskQuestion} style={{ padding: '10px' }}>
        Ask
      </button>
      <p style={{ marginTop: '20px' }}>Response: {response}</p>
    </div>
  );
}

export default App;
