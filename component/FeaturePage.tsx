"use client";
import React from "react";
import { Toaster } from "react-hot-toast";
import ReactFlow, { Background, Controls } from "reactflow";
import "reactflow/dist/style.css";

import { FlowProvider, useFlowContext } from "../contexts/FlowContext";
import { FlowToolbar } from "./FlowToolbar";
import { FlowSidebar } from "./FlowSidebar";
import { CustomNode } from "./nodes/CustomNode";

const FlowContent: React.FC = () => {
  const {
    nodes,
    edges,
    hasStoredData,
    selectedNodeId,
    currentMessage,
    onConnect,
    onNodesChange,
    addMessageNode,
    handleSaveChanges,
    handleClearData,
    handleNodeSelect,
    handleCloseModal,
    handleSaveMessage,
  } = useFlowContext();

  const nodeTypes = React.useMemo(
    () => ({
      custom: CustomNode,
    }),
    []
  );

  return (
    <div className="h-screen w-screen">
      <Toaster />
      <FlowToolbar
        hasStoredData={hasStoredData}
        onSaveChanges={handleSaveChanges}
        onClearData={handleClearData}
      />

      <div className="flex h-full w-full">
        <div className="flex-1 relative">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onConnect={onConnect}
            onNodesChange={onNodesChange}
            nodeTypes={nodeTypes}
            nodesDraggable={true}
            style={{ backgroundColor: "white" }}
            onNodeClick={(_, node) =>
              handleNodeSelect(node.id, node.data.message)
            }
          >
            <Background />
            <Controls />
          </ReactFlow>
        </div>

        <FlowSidebar
          selectedNodeId={selectedNodeId}
          currentMessage={currentMessage}
          onCloseModal={handleCloseModal}
          onSaveMessage={handleSaveMessage}
          onAddMessageNode={addMessageNode}
        />
      </div>
    </div>
  );
};

const FeaturePage: React.FC = () => {
  return (
    <FlowProvider>
      <FlowContent />
    </FlowProvider>
  );
};

export default FeaturePage;
