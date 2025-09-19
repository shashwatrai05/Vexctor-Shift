// src/nodes/textNode.js
import React, { useState } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, TextArea } from '../styles/StyledComponents';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handles = [
    createHandle(`${id}-output`, 'source')
  ];

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Calculate dynamic height based on text content
  const textLines = currText.split('\n').length;
  const dynamicHeight = Math.max(100, 60 + (textLines * 18));

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text Template"
      handles={handles}
      nodeType="text"
      icon="📝"
      height={dynamicHeight}
      width={250}
    >
      <FormField>
        <Label>Template Content</Label>
        <TextArea 
          value={currText} 
          onChange={handleTextChange}
          placeholder="Enter text template with {{variables}}"
          rows={Math.max(3, textLines)}
          style={{ minHeight: '60px' }}
        />
      </FormField>
    </BaseNode>
  );
};