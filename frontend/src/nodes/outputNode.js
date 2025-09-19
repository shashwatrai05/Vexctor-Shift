// src/nodes/outputNode.js
import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, Input, Select } from '../styles/StyledComponents';

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
      nodeType="output"
      icon="📤"
      height={100}
    >
      <FormField>
        <Label>Output Name</Label>
        <Input 
          type="text" 
          value={currName} 
          onChange={handleNameChange}
          placeholder="Enter output name"
        />
      </FormField>
      <FormField>
        <Label>Output Type</Label>
        <Select 
          value={outputType} 
          onChange={handleTypeChange}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
          <option value="JSON">JSON</option>
          <option value="Image">Image</option>
        </Select>
      </FormField>
    </BaseNode>
  );
};