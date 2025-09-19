// src/toolbar.js
import React from 'react';
import { DraggableNode } from './draggableNode';
import { 
  ToolbarContainer, 
  ToolbarTitle, 
  NodeGrid 
} from './styles/StyledComponents';
import { theme } from './styles/theme';

const nodeConfigs = [
  { type: 'customInput', label: 'Input', icon: '📥', color: theme.colors.nodeTypes.input },
  { type: 'llm', label: 'LLM', icon: '🤖', color: theme.colors.nodeTypes.llm },
  { type: 'customOutput', label: 'Output', icon: '📤', color: theme.colors.nodeTypes.output },
  { type: 'text', label: 'Text', icon: '📝', color: theme.colors.nodeTypes.text },
  { type: 'filter', label: 'Filter', icon: '🔍', color: theme.colors.nodeTypes.filter },
  { type: 'math', label: 'Math', icon: '🧮', color: theme.colors.nodeTypes.math },
  { type: 'conditional', label: 'If/Else', icon: '🔀', color: theme.colors.nodeTypes.conditional },
  { type: 'database', label: 'Database', icon: '🗄️', color: theme.colors.nodeTypes.database },
  { type: 'transform', label: 'Transform', icon: '⚡', color: theme.colors.nodeTypes.transform },
];

export const PipelineToolbar = () => {
  return (
    <ToolbarContainer>
      <ToolbarTitle>Pipeline Components</ToolbarTitle>
      <NodeGrid>
        {nodeConfigs.map((config) => (
          <DraggableNode
            key={config.type}
            type={config.type}
            label={config.label}
            icon={config.icon}
            color={config.color}
          />
        ))}
      </NodeGrid>
    </ToolbarContainer>
  );
};