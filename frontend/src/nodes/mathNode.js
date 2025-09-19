import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, Select } from '../styles/StyledComponents';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'add');

  const handles = [
    createHandle(`${id}-input1`, 'target', { top: '30%' }),
    createHandle(`${id}-input2`, 'target', { top: '70%' }),
    createHandle(`${id}-result`, 'source')
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Math"
      handles={handles}
      nodeType="math"
      icon="➗"
      height={100}
    >
      <FormField>
        <Label>Operation</Label>
        <Select 
          value={operation} 
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add (+)</option>
          <option value="subtract">Subtract (-)</option>
          <option value="multiply">Multiply (×)</option>
          <option value="divide">Divide (÷)</option>
        </Select>
      </FormField>
    </BaseNode>
  );
};
