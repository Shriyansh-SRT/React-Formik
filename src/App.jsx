import { useState } from 'react';
import './App.css';
import Basic from "./components/Basic"
import Advance from './components/Advance';

function App() {
  const [view, setView] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-blue-600 p-4 shadow-md">
        <div className="flex justify-center space-x-10">
          <h3
            className={`text-lg font-semibold cursor-pointer text-white hover:text-blue-200 transition duration-300 ${
              view === 'Basic' ? 'underline' : ''
            }`}
            onClick={() => setView('Basic')}
          >
            Basic
          </h3>
          <h3
            className={`text-lg font-semibold cursor-pointer text-white hover:text-blue-200 transition duration-300 ${
              view === 'Advance' ? 'underline' : ''
            }`}
            onClick={() => setView('Advance')}
          >
            Advance
          </h3>
        </div>
      </nav>

      {/* Dynamic Component Rendering */}
      <div className="p-8">
        {view === 'Basic' && <Basic />}
        {view === 'Advance' && <Advance />}
        {!view && (
          <div className="text-center text-gray-700">
            <p className="text-xl">Please select an option to view.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
