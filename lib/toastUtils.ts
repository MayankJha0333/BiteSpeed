import toast from "react-hot-toast";
import { TOAST_CONFIG } from "./constants";

export const showToast = {
  success: (message: string) => {
    toast.success(message, TOAST_CONFIG.SUCCESS);
  },

  error: (message: string) => {
    toast.error(message, TOAST_CONFIG.ERROR);
  },

  warning: (message: string) => {
    toast(message, TOAST_CONFIG.WARNING);
  },

  info: (message: string) => {
    toast(message, TOAST_CONFIG.INFO);
  },
};

export const flowToasts = {
  dataLoaded: () => showToast.success("Flow data loaded from localStorage!"),
  dataSaved: () =>
    showToast.success("Flow saved successfully to localStorage!"),
  dataCleared: () => showToast.warning("Flow data cleared from localStorage!"),
  saveError: () => showToast.error("Failed to save to localStorage!"),
  clearError: () => showToast.error("Failed to clear localStorage!"),
  connectionError: () =>
    showToast.error(
      "Cannot save flow! Each node must have at least one connection."
    ),
  nodeAdded: () => showToast.info("New message node added!"),
  messageUpdated: () => showToast.success("Message updated successfully!"),
};
