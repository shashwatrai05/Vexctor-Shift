// src/nodes/filterNode.js
import React, { useState } from 'react';
import { BaseNode, HANDLE_PRESETS } from './BaseNode';
import { FormField, Label, Select, Input } from '../styles/StyledComponents';

export const FilterNode = ({ id, data }) => {
  const [filterType, setFilterType] = useState(data?.filterType || 'contains');
  const [filterValue, setFilterValue] = useState(data?.filterValue || '');

  return (
    <BaseNode
      id={id}
      data={data}
      title="Filter"
      handles={HANDLE_PRESETS.inputOutput(id)}
      nodeType="filter"
      icon="🔍"
      height={110}
    >
      <FormField>
        <Label>Filter Type</Label>
        <Select 
          value={filterType} 
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="contains">Contains</option>
          <option value="equals">Equals</option>
          <option value="greater">Greater than</option>
          <option value="less">Less than</option>
        </Select>
      </FormField>
      <FormField>
        <Label>Filter Value</Label>
        <Input
          type="text"
          placeholder="Enter filter value"
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        />
      </FormField>
    </BaseNode>
  );
};