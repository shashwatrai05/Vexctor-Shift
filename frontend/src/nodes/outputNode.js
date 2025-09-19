// outputNode.js

import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handles = [
    createHandle(`${id}-value`, 'target')
  ];

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Output"
      handles={handles}
      style={{ backgroundColor: '#fff8e1' }}
    >
      <label style={{ display: 'block', marginBottom: '4px' }}>
        Name:
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          style={{ marginLeft: '4px', fontSize: '12px' }}
        />
      </label>
      <label style={{ display: 'block' }}>
        Type:
        <select 
          value={outputType} 
          onChange={handleTypeChange}
          style={{ marginLeft: '4px', fontSize: '12px' }}
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};