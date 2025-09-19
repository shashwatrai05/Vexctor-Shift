import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, Select } from '../styles/StyledComponents';

export const ConditionalNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'if');

  const handles = [
    createHandle(`${id}-input`, 'target', { top: '50%' }),
    createHandle(`${id}-true`, 'source', { top: '30%' }),
    createHandle(`${id}-false`, 'source', { top: '70%' })
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Conditional"
      handles={handles}
      nodeType="conditional"
      icon="⚖️"
      height={120}
    >
      <FormField>
        <Label>Condition Type</Label>
        <Select 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)}
        >
          <option value="if">If condition</option>
          <option value="switch">Switch case</option>
          <option value="try">Try-catch</option>
        </Select>
      </FormField>
      <div style={{ fontSize: '12px', marginTop: '6px' }}>
        <div>✓ True Path</div>
        <div>✗ False Path</div>
      </div>
    </BaseNode>
  );
};
