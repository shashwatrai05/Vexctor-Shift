// src/nodes/inputNode.js
import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, Input, Select } from '../styles/StyledComponents';

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
      nodeType="input"
      icon="📥"
      height={100}
    >
      <FormField>
        <Label>Variable Name</Label>
        <Input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          placeholder="Enter variable name"
        />
      </FormField>
      <FormField>
        <Label>Input Type</Label>
        <Select 
          value={inputType} 
          onChange={handleTypeChange}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
          <option value="Number">Number</option>
        </Select>
      </FormField>
    </BaseNode>
  );
};