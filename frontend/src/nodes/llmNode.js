// src/nodes/llmNode.js
import React, { useState } from 'react';
import { BaseNode, HANDLE_PRESETS } from './BaseNode';
import { FormField, Label, Select } from '../styles/StyledComponents';

export const LLMNode = ({ id, data }) => {
  const [model, setModel] = useState(data?.model || 'gpt-4');
  const [temperature, setTemperature] = useState(data?.temperature || '0.7');

  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM Engine"
      handles={HANDLE_PRESETS.llmHandles(id)}
      nodeType="llm"
      icon="🤖"
      height={120}
    >
      <FormField>
        <Label>Model</Label>
        <Select 
          value={model} 
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-3.5-turbo">GPT-3.5 Turbo</option>
          <option value="claude-3">Claude 3</option>
          <option value="llama-2">Llama 2</option>
        </Select>
      </FormField>
      <FormField>
        <Label>Temperature</Label>
        <Select 
          value={temperature} 
          onChange={(e) => setTemperature(e.target.value)}
        >
          <option value="0">0 (Deterministic)</option>
          <option value="0.3">0.3 (Focused)</option>
          <option value="0.7">0.7 (Balanced)</option>
          <option value="1.0">1.0 (Creative)</option>
        </Select>
      </FormField>
    </BaseNode>
  );
};