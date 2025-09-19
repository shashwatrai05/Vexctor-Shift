// src/ui.js
import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { FilterNode } from './nodes/filterNode';
import { MathNode } from './nodes/mathNode';
import { ConditionalNode } from './nodes/conditionalNode';
import { DatabaseNode } from './nodes/databaseNode';
import { TransformNode } from './nodes/transformNode';
import { CanvasContainer } from './styles/StyledComponents';
import { theme } from './styles/theme';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  filter: FilterNode,
  math: MathNode,
  conditional: ConditionalNode,
  database: DatabaseNode,
  transform: TransformNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

const defaultEdgeOptions = {
  type: 'smoothstep',
  animated: true,
  style: {
    stroke: theme.colors.primary[400],
    strokeWidth: 2,
  },
  markerEnd: {
    type: 'arrow',
    width: 20,
    height: 20,
    color: theme.colors.primary[400],
  },
};

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
      nodes,
      edges,
      getNodeID,
      addNode,
      onNodesChange,
      onEdgesChange,
      onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
      let nodeData = { id: nodeID, nodeType: `${type}` };
      return nodeData;
    }

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
          if (event?.dataTransfer?.getData('application/reactflow')) {
            const appData = JSON.parse(event.dataTransfer.getData('application/reactflow'));
            const type = appData?.nodeType;
      
            // check if the dropped element is valid
            if (typeof type === 'undefined' || !type) {
              return;
            }
      
            const position = reactFlowInstance.project({
              x: event.clientX - reactFlowBounds.left,
              y: event.clientY - reactFlowBounds.top,
            });

            const nodeID = getNodeID(type);
            const newNode = {
              id: nodeID,
              type,
              position,
              data: getInitNodeData(nodeID, type),
            };
      
            addNode(newNode);
          }
        },
        [reactFlowInstance, getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <CanvasContainer>
            <div ref={reactFlowWrapper} style={{width: '100%', height: '100%'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    onInit={setReactFlowInstance}
                    nodeTypes={nodeTypes}
                    proOptions={proOptions}
                    snapGrid={[gridSize, gridSize]}
                    connectionLineType='smoothstep'
                    defaultEdgeOptions={defaultEdgeOptions}
                    fitView
                    fitViewOptions={{ padding: 0.2 }}
                    minZoom={0.2}
                    maxZoom={2}
                >
                    <Background 
                      color={theme.colors.dark.border} 
                      gap={gridSize} 
                      size={1}
                      style={{ backgroundColor: theme.colors.dark.bg }}
                    />
                    <Controls 
                      style={{
                        background: theme.colors.dark.elevated,
                        border: `1px solid ${theme.colors.dark.border}`,
                      }}
                    />
                    <MiniMap 
                      style={{
                        background: theme.colors.dark.elevated,
                        border: `1px solid ${theme.colors.dark.border}`,
                      }}
                      maskColor={`${theme.colors.dark.surface}80`}
                      nodeColor={(node) => {
                        const nodeType = node.type.replace('custom', '').toLowerCase();
                        return theme.colors.nodeTypes[nodeType] || theme.colors.primary[400];
                      }}
                    />
                </ReactFlow>
            </div>
        </CanvasContainer>
    )
};