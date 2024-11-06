import React, { useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  const handleAskQuestion = async () => {
    const res = await fetch('http://localhost:3000/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    const data = await res.text();
    setResponse(data);
  };

  return (
    <div>
      <h1>AI-Enhanced Document QA System</h1>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
      />
      <button onClick={handleAskQuestion}>Ask</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
