import React from "react";
import { MdClose } from "react-icons/md";
import { useFlowContext } from "../contexts/FlowContext";
import { MessageEditorProps } from "../lib/types";

export const MessageEditor: React.FC<MessageEditorProps> = ({
  currentMessage,
  onCloseModal,
  onSaveMessage,
}) => {
  const { setCurrentMessage } = useFlowContext();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSaveMessage(currentMessage);
      onCloseModal();
    }
    if (e.key === "Escape") {
      onCloseModal();
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b px-4 py-4">
        <h3 className="text-lg font-semibold text-gray-900">Edit Message</h3>
        <button
          onClick={onCloseModal}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <MdClose size={20} />
        </button>
      </div>

      <div className="px-4">
        <label className="block text-sm font-medium text-gray-900 mb-2">
          Message Content
        </label>
        <textarea
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 border text-gray-700 border-gray-300 rounded-md resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          rows={4}
          placeholder="Enter your message..."
          autoFocus
        />
      </div>

      <div className="flex gap-2 px-4 pb-4">
        <button
          onClick={onCloseModal}
          className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors border border-gray-300 rounded-md"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            onSaveMessage(currentMessage);
            onCloseModal();
          }}
          className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
        >
          Save
        </button>
      </div>
    </div>
  );
};
