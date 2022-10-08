import { useCallback } from "react";
import ReactFlow, {
  Node,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
} from "reactflow";

import StartNode from "./StartNode.jsx";
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
  StartNode,
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
    data: { label: "Start" },
    position: { x: 280, y: 1 },
    type: "StartNode",
  },
  {
    id: "2",
    data: { label: "/* comment */" },
    position: { x: 50, y: 190 },
    type: "custom",
  },
  {
    id: "3",
    data: { label: "Recognize text Google" },
    position: { x: 220, y: 350 },
    type: "CustomNode2",
  },
  {
    id: "4",
    data: { label: "/* comment */" },
    position: { x: -20, y: 350 },
    type: "CustomNode1",
  },
  {
    id: "5",
    data: { label: "/* comment 4  */" },
    position: { x: -150, y: 550 },
    type: "CustomNode5",
  },
  {
    id: "6",
    data: { label: "/* comment*/" },
    position: { x: 170, y: 500 },
    type: "CustomNode6",
  },
  {
    id: "7",
    data: { label: "Assign value" },
    position: { x: 50, y: 700 },
    type: "CustomNode7",
  },
  {
    id: "8",
    data: { label: "Execute js code" },
    position: { x: 450, y: 720 },
    type: "CustomNode8",
  },
  {
    id: "9",
    data: { label: "Log" },
    position: { x: 800, y: 700 },
    type: "CustomNode9",
  },
  {
    id: "10",
    data: { label: "Finish" },
    position: { x: 200, y: 900 },
    type: "CustomNode10",
  },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", type: "step" },
  { id: "e2-4", source: "2", target: "4", type: "step" },
  { id: "e4-5", source: "4", target: "5", type: "step" },
  { id: "e4-6", source: "4", sourceHandle: "b", target: "6", type: "step" },
  { id: "e6-3", source: "6", target: "3", type: "step" },
  { id: "e3-8", source: "3", target: "8", type: "step" },
  { id: "e3-8", source: "9", target: "8", type: "step" },
  // { id: "e9-10", source: "9", sourceHandle: "a", target: "10", type: "step" },
  { id: "e8", source: "8", sourceHandle: "a", target: "10", type: "step" },
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
