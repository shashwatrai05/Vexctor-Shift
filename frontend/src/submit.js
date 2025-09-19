// src/submit.js
import React from 'react';
import { useStore } from './store';
import { SubmitButtonStyled } from './styles/StyledComponents';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const handleSubmit = async () => {
    try {
      // Prepare the data to send to backend
      const pipelineData = {
        nodes: nodes,
        edges: edges
      };

      // Send POST request to backend
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pipelineData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      // Display user-friendly alert
      const dagStatus = result.is_dag ? 'Yes' : 'No';
      const alertMessage = `Pipeline Analysis Results:
      
• Number of Nodes: ${result.num_nodes}
• Number of Edges: ${result.num_edges}
• Is Valid DAG: ${dagStatus}

${result.is_dag ? 
  '✅ Your pipeline is a valid Directed Acyclic Graph!' : 
  '⚠️ Your pipeline contains cycles and is not a valid DAG.'
}`;

      alert(alertMessage);

    } catch (error) {
      console.error('Error submitting pipeline:', error);
      alert(`Error submitting pipeline: ${error.message}`);
    }
  };

  return (
    <SubmitButtonStyled type="button" onClick={handleSubmit}>
      🚀 Deploy Pipeline
    </SubmitButtonStyled>
  );
};