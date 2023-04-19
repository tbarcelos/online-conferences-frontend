import React from 'react';
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <Login onLogin={function (email: string, password: string): void {
        throw new Error('Function not implemented.');
      } } />
    </div>
  );
}

export default App;
