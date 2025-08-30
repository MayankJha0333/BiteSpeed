# Flow Builder Application

A professional React-based flow builder application with drag-and-drop functionality, built using ReactFlow and TypeScript.

## 🏗️ Architecture

The application follows a clean, modular architecture with clear separation of concerns:

### Core Structure

```
src/
├── app/                    # Next.js app directory
├── component/              # React components
│   ├── nodes/             # Custom node components
│   │   └── CustomNode.tsx
│   ├── FlowToolbar.tsx    # Top toolbar with save/clear actions
│   ├── FlowSidebar.tsx    # Right sidebar for node editing/creation
│   ├── MessageEditor.tsx  # Message editing interface
│   ├── NodeCreator.tsx    # Node creation interface
│   └── FeaturePage.tsx    # Main application component
├── contexts/              # React contexts for state management
│   └── FlowContext.tsx    # Centralized flow state management
├── hooks/                 # Custom React hooks (legacy - now using context)
├── lib/                   # Utility functions and configurations
│   ├── constants.ts       # Application constants
│   ├── flowUtils.ts       # Flow-related utility functions
│   ├── toastUtils.ts      # Toast notification utilities
│   └── types.ts           # TypeScript type definitions
└── public/                # Static assets
```

## 🎯 Key Features

- **Drag & Drop Flow Builder**: Create and connect message nodes visually
- **Real-time Editing**: Click nodes to edit their messages
- **Persistent Storage**: Save and load flows from localStorage
- **Professional UI**: Clean, modern interface with smooth animations
- **Type Safety**: Full TypeScript support with proper type definitions
- **Modular Architecture**: Well-organized, maintainable codebase

## 🛠️ Technology Stack

- **React 18** with TypeScript
- **ReactFlow** for flow diagram functionality
- **Tailwind CSS** for styling
- **React Hot Toast** for notifications
- **React Icons** for UI icons
- **Next.js 14** for the framework

## 📦 Component Architecture

### State Management

- **FlowContext**: Centralized state management using React Context
- **FlowProvider**: Wraps the application with flow state
- **useFlowContext**: Custom hook for accessing flow state

### Core Components

- **FeaturePage**: Main application container
- **FlowToolbar**: Top toolbar with save/clear functionality
- **FlowSidebar**: Right sidebar for node management
- **CustomNode**: Custom message node component
- **MessageEditor**: Modal for editing node messages
- **NodeCreator**: Interface for adding new nodes

### Utilities

- **flowUtils**: Flow-related operations (save, load, validation)
- **toastUtils**: Centralized toast notifications
- **constants**: Application configuration
- **types**: TypeScript type definitions

## 🔧 Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Running the Application

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## 🎨 Code Quality Features

### Type Safety

- Full TypeScript implementation
- Centralized type definitions
- Proper interface definitions for all components

### Code Organization

- Clear separation of concerns
- Modular component structure
- Utility functions for reusability
- Constants for configuration management

### Best Practices

- React hooks for state management
- Context API for global state
- Proper error handling
- Consistent naming conventions
- JSDoc comments for functions

## 🚀 Performance Optimizations

- React.memo for component optimization
- useCallback for function memoization
- Efficient state updates
- Lazy loading where appropriate

## 📝 Usage

1. **Adding Nodes**: Click the "Message" button in the sidebar
2. **Connecting Nodes**: Drag from one node's handle to another
3. **Editing Messages**: Click on any node to edit its message
4. **Saving Flow**: Click "Save Changes" in the toolbar
5. **Clearing Data**: Click "Clear Data" to reset the flow

## 🔄 State Flow

1. **Initialization**: Load saved data from localStorage
2. **Node Creation**: Add new nodes with calculated positions
3. **Node Editing**: Select nodes to edit their messages
4. **Connection Management**: Connect nodes with animated edges
5. **Persistence**: Save/load flow state to/from localStorage

## 🎯 Future Enhancements

- Export/import flow configurations
- Multiple node types
- Flow validation rules
- Undo/redo functionality
- Collaborative editing
- Cloud storage integration

## 📄 License

This project is open source and available under the MIT License.
