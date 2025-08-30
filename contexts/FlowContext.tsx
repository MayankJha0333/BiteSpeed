import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  Node,
  Edge,
  Connection,
  NodeChange,
  applyNodeChanges,
  addEdge,
  MarkerType,
} from "reactflow";
import { FLOW_CONFIG } from "../lib/constants";
import { flowToasts } from "../lib/toastUtils";
import {
  areAllNodesConnected,
  saveFlowData,
  loadFlowData,
  clearFlowData,
  createMessageNode,
} from "../lib/flowUtils";

const INITIAL_NODES: Node[] = [
  {
    id: "n1",
    position: FLOW_CONFIG.INITIAL_NODE_POSITION,
    data: {
      message: "Hello! Welcome to the flow.",
    },
    type: "custom",
  },
];

const INITIAL_EDGES: Edge[] = [];

interface FlowContextType {
  nodes: Node[];
  edges: Edge[];
  hasStoredData: boolean;
  selectedNodeId: string | null;
  currentMessage: string;
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  setHasStoredData: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedNodeId: React.Dispatch<React.SetStateAction<string | null>>;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
  onConnect: (params: Connection) => void;
  onNodesChange: (changes: NodeChange[]) => void;
  addMessageNode: () => void;
  handleSaveChanges: () => void;
  handleClearData: () => void;
  handleNodeSelect: (nodeId: string, message: string) => void;
  handleCloseModal: () => void;
  handleSaveMessage: (newMessage: string) => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const useFlowContext = () => {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error("useFlowContext must be used within a FlowProvider");
  }
  return context;
};

interface FlowProviderProps {
  children: React.ReactNode;
}

export const FlowProvider: React.FC<FlowProviderProps> = ({ children }) => {
  const [nodes, setNodes] = useState<Node[]>(INITIAL_NODES);
  const [edges, setEdges] = useState<Edge[]>(INITIAL_EDGES);
  const [hasStoredData, setHasStoredData] = useState(false);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [currentMessage, setCurrentMessage] = useState("");

  // Load data from localStorage on component mount
  useEffect(() => {
    const flowData = loadFlowData();
    if (flowData) {
      setNodes(flowData.nodes);
      setEdges(flowData.edges);
      setHasStoredData(true);
      flowToasts.dataLoaded();
    }
  }, []);

  // Handle save changes
  const handleSaveChanges = useCallback(() => {
    if (areAllNodesConnected(nodes, edges)) {
      const success = saveFlowData(nodes, edges);
      if (success) {
        setHasStoredData(true);
        flowToasts.dataSaved();
      } else {
        flowToasts.saveError();
      }
    } else {
      flowToasts.connectionError();
    }
  }, [nodes, edges]);

  // Handle clear localStorage
  const handleClearData = useCallback(() => {
    const success = clearFlowData();
    if (success) {
      setHasStoredData(false);
      flowToasts.dataCleared();
    } else {
      flowToasts.clearError();
    }
  }, []);

  const onConnect = useCallback((params: Connection) => {
    setEdges((eds) =>
      addEdge(
        {
          ...params,
          type: "smoothstep",
          animated: true,
          style: FLOW_CONFIG.EDGE_STYLE,
          markerEnd: {
            type: MarkerType.Arrow,
            ...FLOW_CONFIG.MARKER_CONFIG,
          },
        },
        eds
      )
    );
  }, []);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const addMessageNode = useCallback(() => {
    const newNode = createMessageNode(nodes);
    setNodes((nds) => [...nds, newNode]);
    flowToasts.nodeAdded();
  }, [nodes]);

  const handleNodeSelect = useCallback((nodeId: string, message: string) => {
    setSelectedNodeId(nodeId);
    setCurrentMessage(message);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedNodeId(null);
    setCurrentMessage("");
  }, []);

  const handleSaveMessage = useCallback(
    (newMessage: string) => {
      if (selectedNodeId) {
        setNodes((nds) =>
          nds.map((node) =>
            node.id === selectedNodeId
              ? {
                  ...node,
                  data: {
                    ...node.data,
                    message: newMessage,
                  },
                }
              : node
          )
        );
        flowToasts.messageUpdated();
      }
    },
    [selectedNodeId]
  );

  const value: FlowContextType = {
    nodes,
    edges,
    hasStoredData,
    selectedNodeId,
    currentMessage,
    setNodes,
    setEdges,
    setHasStoredData,
    setSelectedNodeId,
    setCurrentMessage,
    onConnect,
    onNodesChange,
    addMessageNode,
    handleSaveChanges,
    handleClearData,
    handleNodeSelect,
    handleCloseModal,
    handleSaveMessage,
  };

  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
};
