import React, { useState } from 'react';
import { BaseNode, createHandle, HANDLE_PRESETS } from './BaseNode';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'if');

  const handles = [
    createHandle(`${id}-input`, 'target', { top: '50%' }),
    createHandle(`${id}-true`, 'source', { top: '25%' }),
    createHandle(`${id}-false`, 'source', { top: '75%' })
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Conditional"
      handles={handles}
      height={100}
      style={{ backgroundColor: '#f3e5f5' }}
    >
      <select 
        value={condition} 
        onChange={(e) => setCondition(e.target.value)}
        style={{ width: '100%', fontSize: '12px' }}
      >
        <option value="if">If condition</option>
        <option value="switch">Switch case</option>
        <option value="try">Try-catch</option>
      </select>
      <div style={{ fontSize: '10px', marginTop: '4px' }}>
        <div>✓ True</div>
        <div>✗ False</div>
      </div>
    </BaseNode>
  );
};