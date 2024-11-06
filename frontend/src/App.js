import React, { useState } from 'react'; 

function App() {
  // State for the question input and the response from the server
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');

  // Function to handle sending the question to the server
  const handleAskQuestion = async () => {
    try {
      const res = await fetch('http://localhost:3000/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question }), // send question as JSON
      });
      const data = await res.text();
      setResponse(data); // store the server's response
    } catch (error) {
      console.error('Error:', error); // log any error that occurs
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI-Enhanced Document QA System 🤖</h1>
      
      {/* Input for typing a question */}
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      
      {/* Button to submit the question */}
      <button onClick={handleAskQuestion} style={{ padding: '10px' }}>
        Ask
      </button>
      
      {/* Display the response from the server */}
      <p style={{ marginTop: '20px' }}>Response: {response}</p>
    </div>
  );
}

export default App;
