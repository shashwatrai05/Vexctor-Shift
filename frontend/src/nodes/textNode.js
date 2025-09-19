// textNode.js

import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handles = [
    createHandle(`${id}-output`, 'source')
  ];

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text"
      handles={handles}
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <label style={{ display: 'block' }}>
        Text:
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange}
          style={{ 
            marginLeft: '4px', 
            fontSize: '12px',
            width: '150px'
          }}
        />
      </label>
    </BaseNode>
  );
};