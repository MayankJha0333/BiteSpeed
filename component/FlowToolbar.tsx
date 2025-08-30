import React from "react";
import { FlowToolbarProps } from "../lib/types";

export const FlowToolbar: React.FC<FlowToolbarProps> = ({
  hasStoredData,
  onSaveChanges,
  onClearData,
}) => {
  return (
    <div className="p-2 bg-white flex justify-end border-b shadow-sm">
      <button
        onClick={onSaveChanges}
        className="text-indigo-800 font-semibold text-sm border border-indigo-950 rounded-md py-1 px-3 hover:bg-indigo-100 transition-colors cursor-pointer ml-auto"
      >
        Save Changes
      </button>
      {hasStoredData && (
        <button
          onClick={onClearData}
          className="text-red-600 font-semibold text-sm border border-red-600 rounded-md py-1 px-3 hover:bg-red-50 transition-colors cursor-pointer ml-2"
        >
          Clear Data
        </button>
      )}
    </div>
  );
};
