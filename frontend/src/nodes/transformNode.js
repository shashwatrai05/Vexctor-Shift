import React, { useState } from 'react';
import { BaseNode, HANDLE_PRESETS } from './BaseNode';
import { FormField, Label, Select } from '../styles/StyledComponents';

export const TransformNode = ({ id, data }) => {
  const [inputFormat, setInputFormat] = useState(data?.inputFormat || 'json');
  const [outputFormat, setOutputFormat] = useState(data?.outputFormat || 'csv');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      handles={HANDLE_PRESETS.inputOutput(id)}
      nodeType="transform"
      icon="🔄"
      height={120}
    >
      <FormField>
        <Label>From</Label>
        <Select 
          value={inputFormat} 
          onChange={(e) => setInputFormat(e.target.value)}
        >
          <option value="json">JSON</option>
          <option value="xml">XML</option>
          <option value="csv">CSV</option>
        </Select>
      </FormField>
      <FormField>
        <Label>To</Label>
        <Select 
          value={outputFormat} 
          onChange={(e) => setOutputFormat(e.target.value)}
        >
          <option value="json">JSON</option>
          <option value="xml">XML</option>
          <option value="csv">CSV</option>
        </Select>
      </FormField>
    </BaseNode>
  );
};
