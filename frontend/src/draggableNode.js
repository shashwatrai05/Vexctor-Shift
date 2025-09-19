// src/draggableNode.js
import React from 'react';
import { 
  DraggableNodeContainer, 
  NodeLabel, 
  NodeIcon 
} from './styles/StyledComponents';

export const DraggableNode = ({ type, label, icon, color }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const onDragEnd = (event) => {
    event.target.style.cursor = 'grab';
  };

  return (
    <DraggableNodeContainer
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
      nodeColor={color}
    >
      <NodeIcon iconColor={color}>
        {icon}
      </NodeIcon>
      <NodeLabel>{label}</NodeLabel>
    </DraggableNodeContainer>
  );
};