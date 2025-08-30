import React from "react";
import { FlowSidebarProps } from "../lib/types";
import { MessageEditor } from "./MessageEditor";
import { NodeCreator } from "./NodeCreator";

export const FlowSidebar: React.FC<FlowSidebarProps> = ({
  selectedNodeId,
  currentMessage,
  onCloseModal,
  onSaveMessage,
  onAddMessageNode,
}) => {
  return (
    <div className="w-80 h-full border-l bg-white">
      {selectedNodeId ? (
        <MessageEditor
          currentMessage={currentMessage}
          onCloseModal={onCloseModal}
          onSaveMessage={onSaveMessage}
        />
      ) : (
        <NodeCreator onAddMessageNode={onAddMessageNode} />
      )}
    </div>
  );
};
