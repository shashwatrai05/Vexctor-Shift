import React, { useState } from 'react';
import { BaseNode, createHandle, HANDLE_PRESETS } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handles = [
    createHandle(`${id}-input1`, 'target', { top: '25%' }),
    createHandle(`${id}-input2`, 'target', { top: '75%' }),
    createHandle(`${id}-result`, 'source')
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Math"
      handles={handles}
      style={{ backgroundColor: '#fff3e0' }}
    >
      <select 
        value={operation} 
        onChange={(e) => setOperation(e.target.value)}
        style={{ width: '100%', fontSize: '12px' }}
      >
        <option value="add">Add (+)</option>
        <option value="subtract">Subtract (-)</option>
        <option value="multiply">Multiply (×)</option>
        <option value="divide">Divide (÷)</option>
      </select>
    </BaseNode>
  );
};