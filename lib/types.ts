import { Node, Edge } from "reactflow";

export interface CustomNodeData {
  message: string;
}

export interface FlowData {
  nodes: Node[];
  edges: Edge[];
  timestamp: string;
}

export interface FlowToolbarProps {
  hasStoredData: boolean;
  onSaveChanges: () => void;
  onClearData: () => void;
}

export interface FlowSidebarProps {
  selectedNodeId: string | null;
  currentMessage: string;
  onCloseModal: () => void;
  onSaveMessage: (message: string) => void;
  onAddMessageNode: () => void;
}

export interface MessageEditorProps {
  currentMessage: string;
  onCloseModal: () => void;
  onSaveMessage: (message: string) => void;
}

export interface NodeCreatorProps {
  onAddMessageNode: () => void;
}

export interface CustomNodeProps {
  data: CustomNodeData;
  selected?: boolean;
  id: string;
}
