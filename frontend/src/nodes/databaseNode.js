import React, { useState } from 'react';
import { BaseNode, createHandle, HANDLE_PRESETS } from './BaseNode';

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
      height={120}
      style={{ backgroundColor: '#e8f5e8' }}
    >
      <select 
        value={dbType} 
        onChange={(e) => setDbType(e.target.value)}
        style={{ width: '100%', marginBottom: '4px', fontSize: '12px' }}
      >
        <option value="mysql">MySQL</option>
        <option value="postgres">PostgreSQL</option>
        <option value="mongodb">MongoDB</option>
      </select>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SQL Query"
        style={{ width: '100%', height: '40px', fontSize: '10px', resize: 'none' }}
      />
    </BaseNode>
  );
};
