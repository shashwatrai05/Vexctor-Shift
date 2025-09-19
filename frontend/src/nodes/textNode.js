// src/nodes/textNode.js
import React, { useState, useEffect, useMemo } from 'react';
import { BaseNode, createHandle } from './BaseNode';
import { FormField, Label, TextArea } from '../styles/StyledComponents';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const updateNodeField = useStore(state => state.updateNodeField);

  // Extract variables from text using regex
  const extractVariables = (text) => {
    const variableRegex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const variables = new Set();
    let match;
    
    while ((match = variableRegex.exec(text)) !== null) {
      const variableName = match[1].trim();
      // Validate JavaScript identifier
      if (isValidJavaScriptIdentifier(variableName)) {
        variables.add(variableName);
      }
    }
    
    return Array.from(variables);
  };

  // Check if a string is a valid JavaScript identifier
  const isValidJavaScriptIdentifier = (name) => {
    const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    const reservedWords = [
      'abstract', 'await', 'boolean', 'break', 'byte', 'case', 'catch', 'char',
      'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double',
      'else', 'enum', 'export', 'extends', 'false', 'final', 'finally', 'float',
      'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof',
      'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package',
      'private', 'protected', 'public', 'return', 'short', 'static', 'super',
      'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true',
      'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield'
    ];
    
    return identifierRegex.test(name) && !reservedWords.includes(name.toLowerCase());
  };

  // Calculate dynamic dimensions
  const calculateDimensions = (text) => {
    const lines = text.split('\n');
    const lineCount = lines.length;
    const maxLineLength = Math.max(...lines.map(line => line.length));
    
    // Base dimensions
    const baseWidth = 250;
    const baseHeight = 100;
    
    // Calculate dynamic width (approximate 8px per character)
    const dynamicWidth = Math.max(baseWidth, Math.min(400, baseWidth + (maxLineLength * 6)));
    
    // Calculate dynamic height (approximate 20px per line + padding)
    const dynamicHeight = Math.max(baseHeight, baseHeight + ((lineCount - 3) * 18));
    
    return { width: dynamicWidth, height: dynamicHeight };
  };

  // Memoize variables extraction to avoid unnecessary recalculations
  const variables = useMemo(() => extractVariables(currText), [currText]);
  
  // Memoize dimensions calculation
  const dimensions = useMemo(() => calculateDimensions(currText), [currText]);

  // Create handles based on extracted variables
  const handles = useMemo(() => {
    const handlesList = [];
    
    // Add variable handles (inputs on the left)
    variables.forEach((variable, index) => {
      const topPosition = variables.length === 1 
        ? '50%' 
        : `${((index + 1) * 100) / (variables.length + 1)}%`;
      
      handlesList.push(
        createHandle(`${id}-${variable}`, 'target', { 
          top: topPosition,
          left: '-5px'
        })
      );
    });
    
    // Always add output handle on the right
    handlesList.push(
      createHandle(`${id}-output`, 'source', { 
        top: '50%',
        right: '-5px'
      })
    );
    
    return handlesList;
  }, [id, variables]);

  // Update store when text changes
  useEffect(() => {
    updateNodeField(id, 'text', currText);
    updateNodeField(id, 'variables', variables);
  }, [currText, variables, id, updateNodeField]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      title="Text Template"
      handles={handles}
      nodeType="text"
      icon="📝"
      height={dimensions.height}
      width={dimensions.width}
    >
      <FormField>
        <Label>Template Content</Label>
        <TextArea 
          value={currText} 
          onChange={handleTextChange}
          placeholder="Enter text template with {{variables}}"
          rows={Math.max(3, currText.split('\n').length)}
          style={{ 
            minHeight: '60px',
            width: '100%',
            resize: 'none'
          }}
        />
      </FormField>
      
      {/* Display detected variables */}
      {variables.length > 0 && (
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          marginTop: '8px', 
          fontSize: '10px', 
          color: '#888',
          borderTop: '1px solid #333',
          paddingTop: '6px'
        }}>
          <div style={{ marginBottom: '2px' }}>Variables:</div>
          {variables.map((variable, index) => (
            <div key={variable} style={{ 
              display: 'flex',
              overflowWrap: 'break-word',
              wordWrap: 'break-word',
              wordBreak: 'break-all',
              background: '#2d2d30',
              padding: '2px 0px',
              borderRadius: '3px',
              marginRight: '4px',
              marginBottom: '2px',
              maxWidth: '100%'
            }}>
              {variable}
            </div>
          ))}
        </div>
      )}
    </BaseNode>
  );
};