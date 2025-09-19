// draggableNode.js - Updated with modern styling
import React, { useState } from 'react';

export const DraggableNode = ({ type, label, icon, color = 'blue' }) => {
  const [isDragging, setIsDragging] = useState(false);

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
    setIsDragging(true);
  };

  const onDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`draggable-node node-${color} ${isDragging ? 'dragging' : ''}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={onDragEnd}
      draggable
    >
      <div className="node-icon">{icon}</div>
      <span>{label}</span>
    </div>
  );
};