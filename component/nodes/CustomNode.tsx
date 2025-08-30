import React from "react";
import { Handle, Position } from "reactflow";
import { CustomNodeProps } from "../../lib/types";

export const CustomNode: React.FC<CustomNodeProps> = ({ data, selected }) => {
  return (
    <div
      className={`shadow-md rounded-md bg-white border overflow-hidden w-44 cursor-pointer hover:shadow-lg transition-shadow ${
        selected ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <Handle
        type="target"
        position={Position.Left}
        className="w-6 h-6 !bg-blue-500 hover:!bg-blue-600"
      />
      <div className="w-full text-sm py-1 px-2 font-semibold bg-green-400">
        Send Message
      </div>
      <div className="flex items-center">
        <div className="text-gray-600 text-sm py-2 px-2 break-words">
          {data.message}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Right}
        className="w-6 h-6 !bg-blue-500 hover:!bg-blue-600"
      />
    </div>
  );
};
