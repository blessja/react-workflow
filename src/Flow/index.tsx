import { useCallback } from "react";
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from "reactflow";

import CustomNode from "./CustomNode";
import CustomNode1 from "./CustomNode1";
import CustomNode2 from "./CustomNode2.jsx";
import CustomNode5 from "./CustomNode5.jsx";
import CustomNode6 from "./CustomNode6.jsx";
import CustomNode7 from "./CustomNode7.jsx";
import CustomNode8 from "./CustomNode8.jsx";
import CustomNode9 from "./CustomNode9.jsx";
import CustomNode10 from "./CustomNode10.jsx";

// styles from the lib
import "reactflow/dist/style.css";

import "./Flow.css";

const nodeTypes = {
  custom: CustomNode,
  CustomNode1,
  CustomNode2,
  CustomNode5,
  CustomNode6,
  CustomNode7,
  CustomNode8,
  CustomNode9,
  CustomNode10,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    data: { label: "/* comment */" },
    position: { x: 150, y: 100 },
    type: "custom",
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: 500, y: 250 },
    type: "CustomNode2",
  },
  {
    id: "4",
    data: { label: "/* comment */" },
    position: { x: 100, y: 250 },
    type: "CustomNode1",
  },
  {
    id: "5",
    data: { label: "/* comment */" },
    position: { x: 50, y: 400 },
    type: "CustomNode5",
  },
  {
    id: "6",
    data: { label: "/* comment */" },
    position: { x: 500, y: 350 },
    type: "CustomNode6",
  },
  {
    id: "7",
    data: { label: "/* comment */" },
    position: { x: 50, y: 500 },
    type: "CustomNode7",
  },
  {
    id: "8",
    data: { label: "/* comment */" },
    position: { x: 420, y: 520 },
    type: "CustomNode8",
  },
  {
    id: "9",
    data: { label: "/* comment */" },
    position: { x: 730, y: 500 },
    type: "CustomNode9",
  },
  {
    id: "10",
    data: { label: "/* comment */" },
    position: { x: 400, y: 700 },
    type: "CustomNode9",
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
      nodeTypes={nodeTypes}
    ></ReactFlow>
  );
}

export default Flow;
