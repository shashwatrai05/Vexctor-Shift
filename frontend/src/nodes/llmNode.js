// llmNode.js
import React from 'react';
import { BaseNode, HANDLE_PRESETS } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      data={data}
      title="LLM"
      handles={HANDLE_PRESETS.llmHandles(id)}
      style={{ backgroundColor: '#f0f8ff' }}
    >
      <div style={{ fontSize: '12px', color: '#666' }}>
        This is a LLM.
      </div>
      <div style={{ fontSize: '10px', marginTop: '4px', color: '#888' }}>
        <div>← System</div>
        <div>← Prompt</div>
      </div>
    </BaseNode>
  );
};