import React, { useState } from 'react';
import { BaseNode, createHandle, HANDLE_PRESETS } from './BaseNode';

export const FilterNode = ({ id, data }) => {
  const [filterType, setFilterType] = useState(data?.filterType || 'contains');
  const [filterValue, setFilterValue] = useState(data?.filterValue || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      handles={HANDLE_PRESETS.inputOutput(id)}
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <select 
        value={filterType} 
        onChange={(e) => setFilterType(e.target.value)}
        style={{ width: '100%', marginBottom: '4px', fontSize: '12px' }}
      >
        <option value="contains">Contains</option>
        <option value="equals">Equals</option>
        <option value="greater">Greater than</option>
      </select>
      <input
        type="text"
        placeholder="Filter value"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        style={{ width: '100%', fontSize: '12px' }}
      />
    </BaseNode>
  );
};
