// src/nodes/BaseNode.js
import React from 'react';
import { Handle, Position } from 'reactflow';
import { 
  BaseNodeStyled, 
  NodeHeader, 
  NodeTitle, 
  NodeContent,
  NodeIcon
} from '../styles/StyledComponents';
import { theme } from '../styles/theme';

export const BaseNode = ({ 
  id, 
  data, 
  title, 
  children, 
  handles = [], 
  width = 200, 
  height = 80,
  nodeType,
  icon,
  className = ''
}) => {
  const nodeColor = theme.colors.nodeTypes[nodeType] || theme.colors.primary[400];

  return (
    <BaseNodeStyled
      width={width}
      height={height}
      nodeColor={nodeColor}
      className={className}
    >
      {/* Render input handles (left side) */}
      {handles
        .filter(handle => handle.type === 'target')
        .map((handle, index) => (
          <Handle
            key={handle.id}
            type="target"
            position={Position.Left}
            id={handle.id}
            style={handle.style || { 
              top: `${(index + 1) * (100 / (handles.filter(h => h.type === 'target').length + 1))}%`,
              background: theme.colors.dark.surface,
              border: `2px solid ${nodeColor}`,
              width: 10,
              height: 10
            }}
          />
        ))}

      {/* Node header */}
      <NodeHeader>
        <NodeIcon iconColor={nodeColor}>
          {icon}
        </NodeIcon>
        <NodeTitle>{title}</NodeTitle>
      </NodeHeader>

      {/* Node content */}
      <NodeContent>
        {children}
      </NodeContent>

      {/* Render output handles (right side) */}
      {handles
        .filter(handle => handle.type === 'source')
        .map((handle, index) => (
          <Handle
            key={handle.id}
            type="source"
            position={Position.Right}
            id={handle.id}
            style={handle.style || { 
              top: `${(index + 1) * (100 / (handles.filter(h => h.type === 'source').length + 1))}%`,
              background: theme.colors.dark.surface,
              border: `2px solid ${nodeColor}`,
              width: 10,
              height: 10
            }}
          />
        ))}
    </BaseNodeStyled>
  );
};

// Helper function to create handle configurations
export const createHandle = (id, type, style = {}) => ({
  id,
  type,
  style
});

// Common handle presets
export const HANDLE_PRESETS = {
  singleInput: (id) => [createHandle(`${id}-input`, 'target')],
  singleOutput: (id) => [createHandle(`${id}-output`, 'source')],
  inputOutput: (id) => [
    createHandle(`${id}-input`, 'target'),
    createHandle(`${id}-output`, 'source')
  ],
  llmHandles: (id) => [
    createHandle(`${id}-system`, 'target', { top: '33%' }),
    createHandle(`${id}-prompt`, 'target', { top: '67%' }),
    createHandle(`${id}-response`, 'source')
  ]
};