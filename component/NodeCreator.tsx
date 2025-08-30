import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { NodeCreatorProps } from "../lib/types";

export const NodeCreator: React.FC<NodeCreatorProps> = ({
  onAddMessageNode,
}) => {
  return (
    <div className="p-4">
      <div
        className="p-4 border w-44 rounded-md text-blue-700 flex flex-col items-center gap-0.5 text-sm hover:bg-blue-50 cursor-pointer transition-colors"
        onClick={onAddMessageNode}
      >
        <MdOutlineMessage size={20} />
        <p>Message</p>
      </div>
    </div>
  );
};
