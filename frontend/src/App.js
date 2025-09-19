// App.js - Updated with modern styling
import React from 'react';
import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';
import './styles/globals.css'; // Import the modern styles

function App() {
  return (
    <div className="app-container">
      {/* Modern Header */}
      <header className="app-header">
        <h1 className="app-title">
          🔗 VectorShift Pipeline Builder
        </h1>
      </header>

      {/* Main Content */}
      <main>
        <PipelineToolbar />
        <div className="canvas-container">
          <PipelineUI />
        </div>
        <div className="submit-section">
          <SubmitButton />
        </div>
      </main>
    </div>
  );
}

export default App;