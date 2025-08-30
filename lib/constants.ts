// Toast configuration
export const TOAST_CONFIG = {
  SUCCESS: {
    duration: 3000,
    position: "top-center" as const,
    style: {
      background: "#10b981",
      color: "#fff",
    },
  },
  ERROR: {
    duration: 4000,
    position: "top-center" as const,
    style: {
      background: "#ef4444",
      color: "#fff",
    },
  },
  WARNING: {
    duration: 3000,
    position: "top-center" as const,
    style: {
      background: "#f59e0b",
      color: "#fff",
    },
  },
  INFO: {
    duration: 2000,
    position: "top-center" as const,
    style: {
      background: "#3b82f6",
      color: "#fff",
    },
  },
};

// Flow configuration
export const FLOW_CONFIG = {
  INITIAL_NODE_POSITION: { x: 250, y: 100 },
  NODE_SPACING: { x: 300, y: 200 },
  NODE_STAGGER_COUNT: 3,
  EDGE_STYLE: {
    stroke: "#2563eb",
    strokeWidth: 2,
  },
  MARKER_CONFIG: {
    width: 20,
    height: 20,
    color: "#2563eb",
  },
};

// LocalStorage keys
export const STORAGE_KEYS = {
  FLOW_DATA: "flowData",
} as const;
