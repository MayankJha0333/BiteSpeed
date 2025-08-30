import { Node, Edge } from "reactflow";
import { FLOW_CONFIG, STORAGE_KEYS } from "./constants";
import { FlowData } from "./types";

/**
 * Check if all nodes in the flow are connected
 */
export const areAllNodesConnected = (nodes: Node[], edges: Edge[]): boolean => {
  if (nodes.length <= 1) return true;

  const connectedNodeIds = new Set<string>();

  // Add source and target nodes from edges
  edges.forEach((edge) => {
    connectedNodeIds.add(edge.source);
    connectedNodeIds.add(edge.target);
  });

  // Check if all nodes are connected
  return nodes.every((node) => connectedNodeIds.has(node.id));
};

/**
 * Calculate position for a new node
 */
export const calculateNewNodePosition = (nodes: Node[]) => {
  const maxX =
    nodes.length > 0
      ? Math.max(...nodes.map((node) => node.position.x))
      : FLOW_CONFIG.INITIAL_NODE_POSITION.x;

  return {
    x: maxX + FLOW_CONFIG.NODE_SPACING.x,
    y:
      FLOW_CONFIG.INITIAL_NODE_POSITION.y +
      (nodes.length % FLOW_CONFIG.NODE_STAGGER_COUNT) *
        FLOW_CONFIG.NODE_SPACING.y,
  };
};

/**
 * Save flow data to localStorage
 */
export const saveFlowData = (nodes: Node[], edges: Edge[]): boolean => {
  try {
    const flowData: FlowData = {
      nodes,
      edges,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEYS.FLOW_DATA, JSON.stringify(flowData));
    return true;
  } catch (error) {
    console.error("Error saving flow data:", error);
    return false;
  }
};

/**
 * Load flow data from localStorage
 */
export const loadFlowData = (): FlowData | null => {
  try {
    const storedData = localStorage.getItem(STORAGE_KEYS.FLOW_DATA);
    if (!storedData) return null;

    const parsedData = JSON.parse(storedData);
    if (parsedData.nodes && parsedData.edges) {
      return parsedData;
    }
    return null;
  } catch (error) {
    console.error("Error loading flow data:", error);
    return null;
  }
};

/**
 * Clear flow data from localStorage
 */
export const clearFlowData = (): boolean => {
  try {
    localStorage.removeItem(STORAGE_KEYS.FLOW_DATA);
    return true;
  } catch (error) {
    console.error("Error clearing flow data:", error);
    return false;
  }
};

/**
 * Create a new message node
 */
export const createMessageNode = (nodes: Node[]): Node => {
  const position = calculateNewNodePosition(nodes);

  return {
    id: `n${Date.now()}`,
    position,
    data: {
      message: `Message ${nodes.length + 1}`,
    },
    type: "custom",
  };
};
