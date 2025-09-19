import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, Select, TextArea } from '../styles/StyledComponents';

export const DatabaseNode = ({ id, data }) => {
  const [dbType, setDbType] = useState(data?.dbType || 'mysql');
  const [query, setQuery] = useState(data?.query || 'SELECT *');

  const handles = [
    createHandle(`${id}-query`, 'target'),
    createHandle(`${id}-results`, 'source')
  ];

  return (
    <BaseNode
      id={id}
      data={data}
      title="Database"
      handles={handles}
      nodeType="database"
      icon="🗄️"
      height={140}
    >
      <FormField>
        <Label>DB Type</Label>
        <Select 
          value={dbType} 
          onChange={(e) => setDbType(e.target.value)}
        >
          <option value="mysql">MySQL</option>
          <option value="postgres">PostgreSQL</option>
          <option value="mongodb">MongoDB</option>
        </Select>
      </FormField>
      <FormField>
        <Label>Query</Label>
        <TextArea
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="SQL Query"
          rows={3}
        />
      </FormField>
    </BaseNode>
  );
};
