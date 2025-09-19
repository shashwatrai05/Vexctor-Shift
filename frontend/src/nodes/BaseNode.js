// BaseNode.js - Abstract base component for all nodes

import React from 'react';
import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  data, 
  title, 
  children, 
  handles = [], 
  width = 200, 
  height = 80,
  style = {},
  className = ''
}) => {
  const defaultStyle = {
    width,
    height,
    border: '1px solid black',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '8px',
    ...style
  };

  return (
    <div style={defaultStyle} className={className}>
      {/* Render input handles (left side) */}
      {handles
        .filter(handle => handle.type === 'target')
        .map((handle, index) => (
          <Handle
            key={handle.id}
            type="target"
            position={Position.Left}
            id={handle.id}
            style={handle.style || { top: `${(index + 1) * (100 / (handles.filter(h => h.type === 'target').length + 1))}%` }}
          />
        ))}

      {/* Node title */}
      <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
        <span>{title}</span>
      </div>

      {/* Node content */}
      <div>
        {children}
      </div>

      {/* Render output handles (right side) */}
      {handles
        .filter(handle => handle.type === 'source')
        .map((handle, index) => (
          <Handle
            key={handle.id}
            type="source"
            position={Position.Right}
            id={handle.id}
            style={handle.style || { top: `${(index + 1) * (100 / (handles.filter(h => h.type === 'source').length + 1))}%` }}
          />
        ))}
    </div>
  );
};

// Helper function to create handle configurations
export const createHandle = (id, type, style = {}) => ({
  id,
  type,
  style
});

// Common handle presets
export const HANDLE_PRESETS = {
  singleInput: (id) => [createHandle(`${id}-input`, 'target')],
  singleOutput: (id) => [createHandle(`${id}-output`, 'source')],
  inputOutput: (id) => [
    createHandle(`${id}-input`, 'target'),
    createHandle(`${id}-output`, 'source')
  ],
  llmHandles: (id) => [
    createHandle(`${id}-system`, 'target', { top: '33%' }),
    createHandle(`${id}-prompt`, 'target', { top: '67%' }),
    createHandle(`${id}-response`, 'source')
  ]
};