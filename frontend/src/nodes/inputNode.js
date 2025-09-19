// inputNode.js - Refactored using BaseNode
import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handles = [
    createHandle(`${id}-value`, 'source')
  ];

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Input"
      handles={handles}
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
          value={inputType} 
          onChange={handleTypeChange}
          style={{ marginLeft: '4px', fontSize: '12px' }}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
};