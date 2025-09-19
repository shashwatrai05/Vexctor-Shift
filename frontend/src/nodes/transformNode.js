import React, { useState } from 'react';
import { BaseNode, createHandle, HANDLE_PRESETS } from './BaseNode';

export const TransformNode = ({ id, data }) => {
  const [inputFormat, setInputFormat] = useState(data?.inputFormat || 'json');
  const [outputFormat, setOutputFormat] = useState(data?.outputFormat || 'csv');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Transform"
      handles={HANDLE_PRESETS.inputOutput(id)}
      height={100}
      style={{ backgroundColor: '#fce4ec' }}
    >
      <div style={{ fontSize: '12px' }}>
        <label style={{ display: 'block', marginBottom: '2px' }}>
          From:
          <select 
            value={inputFormat} 
            onChange={(e) => setInputFormat(e.target.value)}
            style={{ marginLeft: '4px', fontSize: '10px' }}
          >
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="csv">CSV</option>
          </select>
        </label>
        <label style={{ display: 'block' }}>
          To:
          <select 
            value={outputFormat} 
            onChange={(e) => setOutputFormat(e.target.value)}
            style={{ marginLeft: '4px', fontSize: '10px' }}
          >
            <option value="json">JSON</option>
            <option value="xml">XML</option>
            <option value="csv">CSV</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
};