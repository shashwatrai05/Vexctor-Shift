from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Dict, Any

app = FastAPI()

# Add CORS middleware to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(pipeline: PipelineData):
    nodes = pipeline.nodes
    edges = pipeline.edges
    
    # Calculate number of nodes and edges
    num_nodes = len(nodes)
    num_edges = len(edges)
    
    # Check if the graph is a DAG (Directed Acyclic Graph)
    is_dag = check_dag(nodes, edges)
    
    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag
    }

def check_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    """
    Check if the graph formed by nodes and edges is a Directed Acyclic Graph (DAG)
    Using DFS-based cycle detection with three colors: white, gray, black
    """
    if not nodes:
        return True
    
    # Create adjacency list from edges
    graph = {}
    node_ids = {node['id'] for node in nodes}
    
    # Initialize graph with all nodes
    for node in nodes:
        graph[node['id']] = []
    
    # Add edges to adjacency list
    for edge in edges:
        source = edge.get('source')
        target = edge.get('target')
        
        # Only add edge if both source and target exist in nodes
        if source in node_ids and target in node_ids:
            graph[source].append(target)
    
    # DFS-based cycle detection
    # 0: white (unvisited), 1: gray (visiting), 2: black (visited)
    color = {node_id: 0 for node_id in node_ids}
    
    def has_cycle_dfs(node_id: str) -> bool:
        if color[node_id] == 1:  # Gray - back edge found, cycle detected
            return True
        if color[node_id] == 2:  # Black - already processed
            return False
        
        color[node_id] = 1  # Mark as gray (visiting)
        
        # Visit all neighbors
        for neighbor in graph[node_id]:
            if has_cycle_dfs(neighbor):
                return True
        
        color[node_id] = 2  # Mark as black (visited)
        return False
    
    # Check for cycles starting from each unvisited node
    for node_id in node_ids:
        if color[node_id] == 0:
            if has_cycle_dfs(node_id):
                return False
    
    return True